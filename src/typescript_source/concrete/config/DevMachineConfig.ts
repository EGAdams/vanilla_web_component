import ISshConfig from "../../abstract/ISshConfig";

/*
 *  class DevMachineConfig
 */
class DevMachineConfig implements ISshConfig {
  name = "adamsl";
  password = "tinman07@Th32";
  host = "10.170.150.4";
  private_key = "/home/adamsl/.ssh/id_rsa_aj";
}

export default DevMachineConfig;
