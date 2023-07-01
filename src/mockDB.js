const mockDB = {
  data: [
    {
      name: "Mixmax",
      budget_name: "Software subscription",
      owner_id: 1,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "burner",
      expiry: "9 Feb",
      limit: 100,
      status: "active",
    },
    {
      name: "Quickbooks",
      budget_name: "Software subscription",
      owner_id: 2,
      spent: {
        value: 50,
        currency: "SGD",
      },
      available_to_spend: {
        value: 250,
        currency: "SGD",
      },
      card_type: "subscription",
      limit: 10,
      status: "active",
    },
    {
      name: "Card 3",
      budget_name: "Budget 3",
      owner_id: 1,
      spent: {
        value: 0,
        currency: "SGD",
      },
      available_to_spend: {
        value: 500,
        currency: "SGD",
      },
      card_type: "subscription",
      limit: 200,
      status: "active",
    },
    {
      name: "Card 4",
      budget_name: "Budget 4",
      owner_id: 2,
      spent: {
        value: 75,
        currency: "SGD",
      },
      available_to_spend: {
        value: 800,
        currency: "SGD",
      },
      card_type: "burner",
      expiry: "15 Aug",
      limit: 150,
      status: "active",
    },
    {
      name: "Card 5",
      budget_name: "Budget 5",
      owner_id: 1,
      spent: {
        value: 20,
        currency: "SGD",
      },
      available_to_spend: {
        value: 300,
        currency: "SGD",
      },
      card_type: "subscription",
      limit: 50,
      status: "inactive",
    },
    {
      name: "Card 6",
      budget_name: "Budget 6",
      owner_id: 2,
      spent: {
        value: 0,
        currency: "SGD"
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD"
      },
      card_type: "burner",
      expiry: "1 Dec",
      limit: 100,
      status: "active"
    },
  ],
  page: 1,
  per_page: 10,
  total: 100,
};

export default mockDB;
