import React, { useState, useEffect } from "react";
import { Tabs, Input, Dropdown, Menu, Checkbox } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import CustomCard from "./CustomCard/CustomCard";
import mockAPI from "./mockAPI";

const { TabPane } = Tabs;
const { Search } = Input;

const CardRender = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    subscription: false,
    burner: false,
  });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchCards();

    // Clean up the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const filtered = mockAPI.data.filter((card) =>
      card.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [searchValue]);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchCards();
  }, [filterOptions]);

  const handleTabChange = (activeKey) => {
    console.log("Active Tab:", activeKey);
  };

  const handleSearch = (value) => {
    setSearchValue(value.trim());
  };

  const handleFilterChange = (type) => (e) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [type]: e.target.checked,
    }));
  };

  const fetchCards = async () => {
    setLoading(true);
    try {
      const response = await mockAPI.getCards(page, 10);
      const newCards = response.data;
      const allCards = page === 1 ? newCards : [...filteredCards, ...newCards];
      setFilteredCards(allCards);

      if (allCards.length >= response.total) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (hasMore && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore, loading]);

  const renderCards = (status, ownerId) => {
    const cardsPerRow = 4;

    const filtered = filteredCards.filter((card) =>
      filterOptions.subscription && filterOptions.burner
        ? card.status === status
        : filterOptions.subscription
        ? card.status === status && card.card_type === "subscription"
        : filterOptions.burner
        ? card.status === status && card.card_type === "burner"
        : card.status === status
    );

    const cardsToShow = ownerId
      ? filtered.filter((card) => card.owner_id === ownerId)
      : filtered;

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cardsToShow.map((card, index) => (
          <div
            key={index}
            style={{ flexBasis: `${100 / cardsPerRow}%`, padding: "10px" }}
          >
            <CustomCard card={card} />
          </div>
        ))}
      </div>
    );
  };

  const filterMenu = (
    <Menu>
      <Menu.ItemGroup key="filterGroup" title="Filters">
        <Menu.Item key="subscription">
          <Checkbox
            checked={filterOptions.subscription}
            onChange={handleFilterChange("subscription")}
          >
            Subscription
          </Checkbox>
        </Menu.Item>
        <Menu.Item key="burner">
          <Checkbox
            checked={filterOptions.burner}
            onChange={handleFilterChange("burner")}
          >
            Burner
          </Checkbox>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search
          placeholder="Search card name"
          allowClear
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 300, marginTop: "1rem" }}
        />
        <Dropdown
          overlay={filterMenu}
          trigger={["click"]}
          style={{ marginTop: "1rem" }}
        >
          <span
            style={{ marginLeft: "1rem", cursor: "pointer", marginTop: "1rem" }}
          >
            <FilterOutlined /> Filters
          </span>
        </Dropdown>
      </div>
      <Tabs defaultActiveKey="1" onChange={handleTabChange}>
        <TabPane tab="Your" key="1">
          {renderCards("active", 1)}
        </TabPane>
        <TabPane tab="All" key="2">
          {renderCards("active")}
        </TabPane>
        <TabPane tab="Blocked" key="3">
          {renderCards("inactive")}
        </TabPane>
      </Tabs>
      {loading && <div style={{ textAlign: "center" }}>Loading...</div>}
    </div>
  );
};

export default CardRender;
