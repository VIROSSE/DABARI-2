import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export type GetUserApiResponse = {
  address: null;
  avatar: string;
  bank_name: string;
  bank_number: string;
  collectionId: string;
  collectionName: string;
  created: string;
  date_of_birth: string;
  department: string;
  designation: string;
  eida_number: string;
  email: string;
  emailVisibility: false;
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
  updated: string;
  username: string;
  verified: true;
  token: string;
};

export async function getUser(): Promise<GetUserApiResponse | null> {
  const cookieStore = cookies();
  const token = cookieStore.get("pbsession");
  if (token) {
    const payload = jwtDecode(token.value);
    const userId = (payload as any).id;
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/api/collections/users/records/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    data.token = token.value;

    return data;
  }
  return null;
}
