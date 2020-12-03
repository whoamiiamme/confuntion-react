import React, { useEffect } from "react";
import _ from "lodash";

import Storage from '../shared/storage'
import { getParamValues } from "../shared/helper";

export default function RedirectComponent(props) {
  useEffect(() => {
    _getAccessToken();
  }, []);

  const _getAccessToken = async () => {
    const { location, history } = props;

    try {
      if (_.isEmpty(location.hash)) {
        return history.push("/dashboard");
      }
      const access = await getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access.expires_in * 1000;
      Storage.set("params", access);
      Storage.set("expiry_time", expiryTime);
      history.push("/dashboard");
    } catch (error) {
      history.push("/");
    }
  };

  return null;
}
