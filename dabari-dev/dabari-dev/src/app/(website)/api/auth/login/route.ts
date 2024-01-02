import axios from "axios";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { identity, password } = await request.json();

    const { data } = await axios.post(
      `${process.env.BACKEND_URL}/api/collections/users/auth-with-password`,
      {
        identity,
        password,
      }
    );
    if (data && data.token) {
      const cookieStore = cookies();
      cookieStore.set("pbsession", data.token);
      return Response.json({
        successful: true,
        data: {
          ...data.record,
          token: data.token,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
  return Response.json({ successful: false });
}
