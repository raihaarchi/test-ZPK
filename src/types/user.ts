type User = {
  id: number;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  login: string;
  phone: string;
  position: string;
  roles: string[];

  contragent: {
    chiefAccountant: string;
    contragentsKind: {
      id: number;
      name: string;
      code: string;
      description: string;
    };
    email: string;
    fullName: string;
    id: number;
    inn: string;
    juridicAddress: {
      id: number;
      fullAddress: string;
      region: string;
      index: string;
      district: string;
    };
    kpp: string;
    ogrn: string;
    okato: string;
    okpo: string;
    okved: string;
    owner: string;
    phoneNumber: string;
    physicAddress: {
      id: number;
      fullAddress: string;
      region: string;
      index: string;
      district: string;
    };
    shortName: string;
    taxSystemCRM: string;
    walletId: string;
    webSite: string;
  };

  isContactPerson: boolean;
};

export default User;
