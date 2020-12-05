import React, { useEffect } from "react";
import _ from "lodash";

import Storage from "../shared/storage";
import { getParamValues } from "../shared/helper";

export default function RedirectComponent({
  setExpiryTime,
  location,
  history,
}) {
  useEffect(() => {
    _getAccessToken();
  }, []);
  console.log("redirect page");

  const _getAccessToken = async () => {
    try {
      if (_.isEmpty(location.hash)) {
        console.log("dashboard redirect");
        return history.push("/dashboard");
      }
      console.log("dashboard redirect true");
      const access = await getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access.expires_in * 1000;
      Storage.set("params", access);
      Storage.set("expiry_time", expiryTime);
      setExpiryTime(expiryTime);
      history.push("/dashboard");
    } catch (error) {
      console.log("dashboard redirect false");
      history.push("/");
    }
  };

  return null;
}
