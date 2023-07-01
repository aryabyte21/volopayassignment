import "./App.css";
import Navbar from "./Navbar";
import CustomCard from "./CustomCard/CustomCard";
import { Card, Button, Checkbox,Select } from "antd";
import { FilterOutlined,CloseOutlined  } from "@ant-design/icons";
import { useState } from "react";
const { Option } = Select;

function App() {
  const [showFilter, setShowFilter] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
      const [checkboxValue, setCheckboxValue] = useState(false);

  const handleApplyFilter = () => {
    // Implement filtering logic here based on user selections
    // For example, you can pass selected filter options to the parent component
    // using the onApplyFilter callback.
    // onApplyFilter(selectedOptions);
    setShowFilter(false); // Close the filter card after applying filter
  };
   const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const handleClearFilter = () => {
    setSelectedOption('');
  };
const handleChangeOption = (value) => {
    setSelectedOption(value);
  };
  const handleCheckboxChange = (e) => {
    setCheckboxValue(e.target.checked);
  };
  return (
    <div className="App">
      <Navbar />
      <CustomCard />

      <Button
        type="primary"
        icon={showFilter ? <CloseOutlined /> : <FilterOutlined />}
        onClick={handleToggleFilter}
      >
        {showFilter ? 'Close Filter' : 'Open Filter'}
      </Button>
      {showFilter && (
        <Card title="Filter Options" style={{ marginTop: "10px" }}>
          <Checkbox checked={checkboxValue} onChange={handleCheckboxChange} style={{ marginBottom: '10px' }}>
            Checkbox
          </Checkbox>
          <Select
            value={selectedOption}
            placeholder="Select an option"
            style={{ width: '100%', marginBottom: '10px' }}
            onChange={handleChangeOption}
          >
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            {/* Add more options as needed */}
          </Select>

          <Button type="primary" onClick={handleApplyFilter} style={{ marginRight: '10px' }}>
            Apply
          </Button>
          <Button onClick={handleClearFilter}>Clear</Button>
        </Card>
      )}
    </div>
  );
}
export default App;
