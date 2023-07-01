import faker from "faker";
import mockDB from "./mockAPI";

const generateFakeCard = () => {
  return {
    name: faker.company.companyName(),
    budget_name: faker.finance.accountName(),
    owner_id: faker.random.number({ min: 1, max: 2 }),
    spent: {
      value: faker.random.number({ min: 0, max: 100 }),
      currency: "SGD",
    },
    available_to_spend: {
      value: faker.random.number({ min: 100, max: 1000 }),
      currency: "SGD",
    },
    card_type: faker.random.arrayElement(["subscription", "burner"]),
    expiry: faker.date.future(),
    limit: faker.random.number({ min: 10, max: 200 }),
    status: faker.random.arrayElement(["active", "inactive"]),
  };
};

const generateFakeCards = (count) => {
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(generateFakeCard());
  }
  return cards;
};

const getCards = (page, perPage) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const total = mockDB.data.length;

  const cards = mockDB.data.slice(startIndex, endIndex);

  return {
    data: cards,
    page,
    per_page: perPage,
    total,
  };
};

const mockAPI = {
  getCards: (page = 1, perPage = 10) => {
    const cards = getCards(page, perPage);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cards);
      }, 500);
    });
  },
  generateFakeData: () => {
    const fakeCards = generateFakeCards(100);
    const fakeDB = {
      data: fakeCards,
      page: 1,
      per_page: 10,
      total: 100,
    };
    return fakeDB;
  },
};

export default mockAPI;
