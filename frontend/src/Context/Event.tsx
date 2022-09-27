import React, { createContext, useState } from "react";

{/* 
// @ts-ignore */}
export const ContactContext = React.createContext();

type Props = {
    title: string;
    children?: React.ReactNode;
  };

export default function ContextProvider({ children }: Props) {



    return (
        <ContactContext.Provider
          value={{
          
          }}
        >
          {children}
        </ContactContext.Provider>
      );
    }