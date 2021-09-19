export interface GalaxyInformation {
  center: string;
  date_created: string;
  description: string;
  description_508: string;
  keywords: string[];
  location: string;
  media_type: string;
  nasa_id: string;
  photographer: string;
  secondary_creator: string;
  title: string;
}

export interface GalaxyObject {
  data: GalaxyInformation[];
  href: string;
  links: {
    href: string;
    rel: string;
    render: string;
  }[];
}
