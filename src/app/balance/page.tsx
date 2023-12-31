"use client";

import React, { useState } from "react";
// import BalanceDisplay from "../components/BalanceDisplay";
// import InputForm from "../components/UI/InputForm";
// import GetBalanceHook from "../Hooks/GetBalanceHooks";

type BalancePageProps = {
  address: string;
  stakingBalance: number;
  nativeBalance: number;
  tokenBalance: { balance: number; symbol: string };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BalancePage: React.FC<BalancePageProps> = () => {
  // const {
  //   address,
  //   stakingBalance,
  //   nativeBalance,
  //   tokenBalance,
  //   loading,
  //   handleSubmit,
  //   handleInputChange,
  //   validAddress,
  //   error,
  // } = GetBalanceHook();

  return (
    <div className="container">
      <h1 className="text-3xl font-semibold mb-10">
        Rocket Pool Balance Checker
      </h1>
    </div>
  );
};

export default BalancePage;
