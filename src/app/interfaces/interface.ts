export interface Homebanner {
  id: number;
  attributes: {
    alt: string;
    url: string;
    img: {
      data: [
        {
          attributes: {
            formats: {
              large: {
                url: string;
              };
            };
          };
        }
      ];
    };
  };
}
