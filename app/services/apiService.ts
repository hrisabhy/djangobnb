const apiService = {
  get: async function (url: string): Promise<any> {
    console.log("testing", url);
    return new Promise<any>((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          resolve(json.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default apiService;
