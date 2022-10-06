import ISshConfig from "../../abstract/ISshConfig";

/*
 *  class JewelryMachineConfig
 */
class JewelryMachineConfig implements ISshConfig {
  name = "tinman72";
  password = "sep02@Th";
  host = "americansjewelry.com";
  private_key = "/home/adamsl/.ssh/id_rsa_aj";
}

export default JewelryMachineConfig;
