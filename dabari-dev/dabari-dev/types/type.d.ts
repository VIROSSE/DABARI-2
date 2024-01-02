export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  hidden?: boolean;
};
export type MainNavItem = NavItem;

export type Menu = {
  mainNav: MainNavItem[];
};

export interface Countries {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
}

export interface UserAuthProps {
  record: Record;
  token: string;
}

export interface Record {
  address: null;
  avatar: string;
  bank_name: string;
  bank_number: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  date_of_birth: string;
  department: string;
  designation: string;
  eida_number: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  id_scan: string;
  mobile_number: string;
  money_source: string;
  name: string;
  name_of_employer: string;
  nationality: string;
  nature_of_employment: string;
  passport_number: string;
  passport_scan: string;
  place_of_birth: string;
  residency: string;
  surname: string;
  updated: Date;
  username: string;
  verified: boolean;
}
