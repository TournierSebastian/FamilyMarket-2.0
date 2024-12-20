import { useState } from "react";
import { RegisterCustomerService, RegisterSelllerService } from "../../Services/AuthService";

const UseRegister = () => {
  const [error, setError] = useState(null);

  const handleRegister = async (registerService, ...args) => {
    try {
      const response = await registerService(...args);
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      if (error.response?.status === 409) {
        setError("Usuario ya registrado");
      } else {
        setError("Error al registrar usuario");
      }
      return false;
    }
  };

  const UseRegisterCustomer = (name, email, password, phoneNumber) => 
    handleRegister(RegisterCustomerService, name, email, password, phoneNumber);

  const UseSellerCustomer = (name, email, password, phoneNumber, hexadecimalCode) => 
    handleRegister(RegisterSelllerService, name, email, password, phoneNumber, hexadecimalCode);

  return { UseRegisterCustomer, UseSellerCustomer, error, setError };
};

export default UseRegister;