import React from 'react'
import { Link } from "react-router-dom";
import './header.css'
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Button } from '@material-ui/core';
import { useUser } from "../lib/hooks";

export default function Header() {
    
  const user = useUser();

    return (
      <nav className="header">
        <Link to="/home">
          <img
            className="header_logo"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic4.businessinsider.com%2Fimage%2F594ba95ae92b941e9549f106-480%2Fthe-ethereum-logo-seen-at-the-ethereum-dev-offices-in-berlin-germany-14-april-2015-ethereum-is-an-open-source-platform-that-hosts-applications-and-data-on-a-decentralized-network-while-the-block-chain-technology-of-the-cryptocurrency-bitcoin-is-restricted-to-finance-this-concerns-applications-that-would-normally-require-escrow-services-like-for-example-financial-applications-social-networking-applications-notaries-or-booking-services-that-need-to-save-and-validate-verifiable-data-photo.jpg&f=1&nofb=1"
            alt="logo"
          />
        </Link>

        <div className="header_navigation">
          <Link to="/transfer" className="header_link">
            <div className="header_options">
              <span className="h">Transfer</span>
            </div>
          </Link>

          {/* <Link to="/swap" className="header_link">
            <div className="header_options">
              <span className="h">Swap</span>
            </div>
          </Link> */}

          <Link to="/create" className="header_link">
            <div className="header_options">
              <span className="h">Create</span>
            </div>
          </Link>

          <Link to="/market" className="header_link">
            <div className="header_options">
              <span className="h">Market</span>
            </div>
          </Link>
        </div>

        {user ? (
          <Button
            href={`${process.env.REACT_APP_SERVER_URL}/api/logout`}
            variant="outlined"
            color="secondary"
            id="headbtn"
          >
            Log Out
          </Button>
        ) : (
          <Button id="headbtn">
            <Link to="/login" className="header_link">
              <div className="header_options">
                <span className="h">Login</span>
              </div>
            </Link>
          </Button>
        )}
      </nav>
    );
}
