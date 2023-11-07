const axios = require("axios");
const baseurl = `https://backend.starbuero.de/external/api/v1`;
class Client {
  constructor(apiToken, debug) {
    if (!apiToken) {
      throw new Error(
        "No API token is defined. Please get the API Key from Starbuero!",
      );
    }
    this.apiToken = apiToken;
    this.debug = debug ? debug : false;
  }

  /**
   * @desciption Get contacts
   * @param {String} page Set page for paginationed response
   * @param {String} limit Set limit for paginationed response: default: 10, min: 10, max: 1000
   * @returns {Function}
   */
  async getContacts(page, limit) {
    if (!page || !limit) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.get(
        `${baseurl}/addon_contact/contact?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get contact
   * @param {String} contact Contact
   * @returns {Function}
   */
  async getContact(contact) {
    if (!contact) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.get(
        `${baseurl}/addon_contact/contact/${contact}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Create contact
   * @param {String} salutation Salutation
   * @param {String} title Title
   * @param {String} firstname Firstname
   * @param {String} lastname Lastname
   * @param {String} company Company
   * @param {String} notice Notice
   * @param {Array} emailAddresses E-Mail Addresses
   * @param {Array} phoneNumbers Phone Numbers
   * @param {Boolean} vip VIP
   * @param {Boolean} employee Employee
   * @param {Boolean} canForward Can Forward
   * @param {Boolean} canNotifiedBySms Can Notified By SMS
   * @returns {Function}
   */
  async createContact(
    salutation,
    title,
    firstname,
    lastname,
    company,
    notice,
    emailAddresses,
    phoneNumbers,
    vip,
    employee,
    canForward,
    canNotifiedBySms,
  ) {
    if (
      !salutation ||
      !title ||
      !firstname ||
      !lastname ||
      !company ||
      !notice ||
      !emailAddresses ||
      !Array.isArray(emailAddresses) ||
      !phoneNumbers ||
      !Array.isArray(phoneNumbers) ||
      vip === undefined ||
      employee === undefined ||
      canForward === undefined ||
      canNotifiedBySms === undefined
    ) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.post(
        `${baseurl}/addon_contact/contact`,
        {
          salutation,
          title,
          firstname,
          lastname,
          company,
          notice,
          emailAddresses,
          phoneNumbers,
          vip,
          employee,
          canForward,
          canNotifiedBySms,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Edit a Contact
   * @param {String} contact Contact
   * @param {String} salutation Salutation
   * @param {String} title Title
   * @param {String} firstname Firstname
   * @param {String} lastname Lastname
   * @param {String} company Company
   * @param {String} notice Notice
   * @param {Array} emailAddresses E-Mail Addresses
   * @param {Array} phoneNumbers Phone Numbers
   * @param {Boolean} vip VIP
   * @param {String} employee Employee
   * @param {Boolean} canForward Can Forward
   * @param {Boolean} canNotifiedBySms Can Notified By SMS
   * @returns {Function}
   */
  async editContact(
    contact,
    salutation,
    title,
    firstname,
    lastname,
    company,
    notice,
    emailAddresses,
    phoneNumbers,
    vip,
    employee,
    canForward,
    canNotifiedBySms,
  ) {
    if (
      !contact ||
      !salutation ||
      !title ||
      !firstname ||
      !lastname ||
      !company ||
      !notice ||
      !emailAddresses ||
      !Array.isArray(emailAddresses) ||
      !phoneNumbers ||
      !Array.isArray(phoneNumbers) ||
      vip === undefined ||
      employee === undefined ||
      canForward === undefined ||
      canNotifiedBySms === undefined
    ) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.put(
        `${baseurl}/addon_contact/contact/${contact}`,
        {
          salutation,
          title,
          firstname,
          lastname,
          company,
          notice,
          emailAddresses,
          phoneNumbers,
          vip,
          employee,
          canForward,
          canNotifiedBySms,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Delete a Contact
   * @param {String} contact Contact
   * @returns {Function}
   */
  async deleteContact(contact) {
    if (!contact) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.delete(
        `${baseurl}/addon_contact/contact/${contact}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get Appointments
   * @param {String} page Set page for paginationed response
   * @param {String} limit Set limit for paginationed response: default: 10, min: 10, max: 1000
   * @returns {Function}
   */
  async getAppointments(page, limit) {
    if (!page || !limit) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.get(
        `${baseurl}/appointment?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get Appointment
   * @param {String} appointment Appointment
   * @returns {Function}
   */
  async getAppointments(appointment) {
    if (!appointment) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.get(
        `${baseurl}/appointment/${appointment}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Create Appointment
   * @param {String} start Start
   * @param {String} ende End
   * @param {String} employee Employee
   * @param {String} beschreibung Description
   * @param {String} importHash Import Hash
   * @param {Boolean} activateTransfer Activate Transfer
   * @param {Boolean} activateTransferVIP Activate Transfer VIP
   * @returns {Function}
   */
  async createAppointment(
    start,
    ende,
    employee,
    beschreibung,
    importHash,
    activateTransfer,
    activateTransferVIP,
  ) {
    if (
      !start ||
      !ende ||
      employee === undefined ||
      !beschreibung ||
      !importHash ||
      activateTransfer === undefined ||
      activateTransferVIP === undefined
    ) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.post(
        `${baseurl}/appointment`,
        {
          start,
          ende,
          employee,
          beschreibung,
          importHash,
          activateTransfer,
          activateTransferVIP,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Create Appointment
   * @param {String} appointment Appointment
   * @param {String} start Start
   * @param {String} ende End
   * @param {String} employee Employee
   * @param {String} beschreibung Description
   * @param {String} importHash Import Hash
   * @param {Boolean} activateTransfer Activate Transfer
   * @param {Boolean} activateTransferVIP Activate Transfer VIP
   * @returns {Function}
   */
  async editAppointment(
    appointment,
    start,
    ende,
    employee,
    beschreibung,
    importHash,
    activateTransfer,
    activateTransferVIP,
  ) {
    if (
      !start ||
      !ende ||
      employee === undefined ||
      !beschreibung ||
      !importHash ||
      activateTransfer === undefined ||
      activateTransferVIP === undefined
    ) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.put(
        `${baseurl}/appointment/${appointment}`,
        {
          start,
          ende,
          employee,
          beschreibung,
          importHash,
          activateTransfer,
          activateTransferVIP,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Delete a Appointment
   * @param {String} appointment Appointment
   * @returns {Function}
   */
  async deleteAppointment(appointment) {
    if (!appointment) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.delete(
        `${baseurl}/appointment/${appointment}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  // CREATE RECURRING APPOINTMENTS SOON

  /**
   * @desciption Delete a Recurring Appointment
   * @param {String} appointment Appointment
   * @returns {Function}
   */
  async deleteRecurringAppointment(appointment) {
    if (!appointment) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.delete(
        `${baseurl}/appointment_recurring/${appointment}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get Call Data
   * @param {String} page Set page for paginationed response
   * @param {String} limit Set limit for paginationed response: default: 10, min: 10, max: 1000
   * @param {String} startDateTime Start (Example : 2022-01-01T13:37:00)
   * @param {String} limit End (Example : 2022-01-01T13:37:00)
   * @returns {Function}
   */
  async getCallData(page, limit, startDateTime, endDateTime) {
    if (!page || !limit || !startDateTime || !endDateTime) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.get(
        `${baseurl}/call_data?page=${page}&limit=${limit}&startDateTime=${encodeURIComponent(
          startDateTime,
        )}&endDateTime=${encodeURIComponent(endDateTime)}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get Company Info
   * @returns {Function}
   */
  async getInfo() {
    try {
      const response = await axios.get(`${baseurl}`, {
        headers: {
          Authorization: `Bearer ${this.apiToken}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Edit Company Info
   * @param {String} begruessung Greeting
   * @param {String} anweisung Instruction
   * @param {String} info_unternehmen Company Info
   * @param {String} impressum Imprint
   * @param {String} outing Outing
   * @returns {Function}
   */
  async editInfo(begruessung, anweisung, info_unternehmen, impressum, outing) {
    if (
      !begruessung ||
      !anweisung ||
      !info_unternehmen ||
      !impressum ||
      !outing
    ) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.put(
        `${baseurl}`,
        {
          begruessung,
          anweisung,
          info_unternehmen,
          impressum,
          outing,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get Employees
   * @param {String} page Set page for paginationed response
   * @param {String} limit Set limit for paginationed response: default: 10, min: 10, max: 1000
   * @returns {Function}
   */
  async getEmployees(page, limit) {
    if (!page || !limit) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.get(
        `${baseurl}/employee?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get Employee
   * @param {String} employee Employee
   * @returns {Function}
   */
  async getEmployee(employee) {
    if (!employee) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.get(`${baseurl}/employee/${employee}`, {
        headers: {
          Authorization: `Bearer ${this.apiToken}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Create Employe
   * @param {String} mitarbeiter Employee
   * @param {Array} mail_cc Mail CC
   * @param {String} mail Mail
   * @param {String} position Position
   * @param {String} zustaendigkeit Responsibility
   * @param {String} subcc Sub CC
   * @param {Boolean} durchwahlfaehig Direct Dialable
   * @param {String} durchwahl Direct Dial
   * @param {Boolean} smsfaehig SMS Capable
   * @param {String} smsnummer SMS Number
   * @param {Boolean} vipdurchwahlfaehig VIP Direct Dialable
   * @param {Boolean} vipsmsfaehig VIP SMS Capable
   * @returns {Function}
   */
  async createEmployee(
    mitarbeiter,
    mail_cc,
    mail,
    position,
    zustaendigkeit,
    subcc,
    durchwahlfaehig,
    durchwahl,
    smsfaehig,
    smsnummer,
    vipdurchwahlfaehig,
    vipsmsfaehig,
  ) {
    if (
      !mitarbeiter ||
      !mail_cc ||
      !Array.isArray(mail_cc) ||
      !mail ||
      !position ||
      !zustaendigkeit ||
      !subcc ||
      durchwahlfaehig === undefined ||
      !durchwahl ||
      smsfaehig === undefined ||
      !smsnummer ||
      vipdurchwahlfaehig === undefined ||
      vipsmsfaehig === undefined
    ) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.post(
        `${baseurl}/employee`,
        {
          mitarbeiter,
          mail_cc,
          mail,
          position,
          zustaendigkeit,
          subcc,
          durchwahlfaehig,
          durchwahl,
          smsfaehig,
          smsnummer,
          vipdurchwahlfaehig,
          vipsmsfaehig,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Edit Employe
   * @param {String} emitarbeiter Edit Employee
   * @param {String} mitarbeiter Employee
   * @param {Array} mail_cc Mail CC
   * @param {String} mail Mail
   * @param {String} position Position
   * @param {String} zustaendigkeit Responsibility
   * @param {String} subcc Sub CC
   * @param {Boolean} durchwahlfaehig Direct Dialable
   * @param {String} durchwahl Direct Dial
   * @param {Boolean} smsfaehig SMS Capable
   * @param {String} smsnummer SMS Number
   * @param {Boolean} vipdurchwahlfaehig VIP Direct Dialable
   * @param {Boolean} vipsmsfaehig VIP SMS Capable
   * @returns {Function}
   */
  async editEmployee(
    emitarbeiter,
    mitarbeiter,
    mail_cc,
    mail,
    position,
    zustaendigkeit,
    subcc,
    durchwahlfaehig,
    durchwahl,
    smsfaehig,
    smsnummer,
    vipdurchwahlfaehig,
    vipsmsfaehig,
  ) {
    if (
      !emitarbeiter ||
      !mitarbeiter ||
      !mail_cc ||
      !Array.isArray(mail_cc) ||
      !mail ||
      !position ||
      !zustaendigkeit ||
      !subcc ||
      durchwahlfaehig === undefined ||
      !durchwahl ||
      smsfaehig === undefined ||
      !smsnummer ||
      vipdurchwahlfaehig === undefined ||
      vipsmsfaehig === undefined
    ) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.post(
        `${baseurl}/employee/${emitarbeiter}`,
        {
          mitarbeiter,
          mail_cc,
          mail,
          position,
          zustaendigkeit,
          subcc,
          durchwahlfaehig,
          durchwahl,
          smsfaehig,
          smsnummer,
          vipdurchwahlfaehig,
          vipsmsfaehig,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Delete a Recurring Appointment
   * @param {Date} employee Employee
   * @returns {Function}
   */
  async deleteEmployee(employee) {
    if (!employee) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.delete(`${baseurl}/employee/${employee}`, {
        headers: {
          Authorization: `Bearer ${this.apiToken}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get FAQ
   * @param {String} page Set page for paginationed response
   * @param {String} limit Set limit for paginationed response: default: 10, min: 10, max: 1000
   * @returns {Function}
   */
  async getFAQ(page, limit) {
    if (!page || !limit) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.get(
        `${baseurl}/faq?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get a FAQ Entry
   * @param {String} faqentry FAQ Entry
   * @returns {Function}
   */
  async getFAQEntry(faqentry) {
    if (!faqentry) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.get(`${baseurl}/faq/${faqentry}`, {
        headers: {
          Authorization: `Bearer ${this.apiToken}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get a FAQ Entry
   * @param {String} faqentry FAQ Entry
   * @param {String} question Question
   * @param {String} answer Answer
   * @returns {Function}
   */
  async editFAQEntry(faqentry, question, answer) {
    if (!faqentry) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.put(
        `${baseurl}/faq/${faqentry}`,
        {
          question,
          answer,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Delete a FAQ Entry
   * @param {String} faqentry FAQ Entry
   * @returns {Function}
   */
  async deleteFAQEntry(faqentry) {
    if (!faqentry) {
      throw new Error(
        "Please check that you have entered all the necessary data.",
      );
    }
    try {
      const response = await axios.delete(`${baseurl}/faq/${faqentry}`, {
        headers: {
          Authorization: `Bearer ${this.apiToken}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`[${response.status}] | Error: ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }
}

module.exports = Client;
