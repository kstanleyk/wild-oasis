import { Outlet } from "react-router-dom";
import Header from "./header";
import SideBar from "./side-bar";
import styled from "styled-components";
import { AppDispatch, useAppDispatch } from "../store";
import { useEffect } from "react";
import { fetchCabinsAsync } from "../store/oasis/cabin/cabin.slice";

const StyledAppShell = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.8rem;
`;

export default function AppShell() {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCabinsAsync())
  }, [dispatch]);
  
  return (
    <StyledAppShell>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppShell>
  );
}
