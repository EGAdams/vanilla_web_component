import ISshConfig from "../../abstract/ISshConfig";

/*
 *  class BasicConfig
 */
class BasicConfig implements ISshConfig {
  name = "";
  host = "mycustombusinessapp.com";
  user = "mycustom";
  password = "f7Jh1jv27O";
  database = "mycustom_WP1";
  connectionLimit = 10;
}

export default BasicConfig;
