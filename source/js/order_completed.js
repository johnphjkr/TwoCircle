import { authCheck } from "../../source/api/certified/authcheck_api.js";
import { checkAccount } from "../../source/api/account/account_add_check.js";

export async function orderCompletedHandler() {
  const auth = await authCheck(JSON.parse(localStorage.getItem("accessToken")));
  const account = await checkAccount(auth);
  let bank = [...account.accounts];
  const item = JSON.parse(localStorage.getItem("basket"));

  localStorage.removeItem("basket");
  localStorage.removeItem("payment");
  localStorage.removeItem("bank");


  


}
