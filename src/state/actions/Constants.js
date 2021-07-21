const prod = {
  url: {
    BASE_URL: "https://young-harbor-63152.herokuapp.com/api/v1/",
    AUTH_URL: "https://young-harbor-63152.herokuapp.com/",
  },
};

const dev = {
  url: {
    BASE_URL: "http://localhost:3090/api/v1/",
    AUTH_URL: "http://localhost:3090/",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
