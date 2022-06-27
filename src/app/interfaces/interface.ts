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


export interface Homelive {
  id:number;
  attributes:{
    data:string;
    title:string;
    desc:string;
    btnname:string;
  }
}

export interface Discography {
  id: number;
  attributes: {
    alt: string;
    type: string;
    title:string;
    url:string;
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