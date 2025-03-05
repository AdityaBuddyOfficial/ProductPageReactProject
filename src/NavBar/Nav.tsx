import React from "react";

const Nav = ({ navCms, setSearchInput, searchInput }: any) => {
  console.log("🚀 ~ Nav ~ navCms:", navCms);

  return (
    <div style={{ marginBottom: "20px" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "transparent",
          border: "1px solid white",
        }}
      >
        <div
          style={{
            height: "60px",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          {" "}
          {navCms?.companyLogo}
        </div>
        <h1
          style={{
            marginLeft: "20px",
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {navCms?.companyName}
        </h1>

        <input
          type="text"
          placeholder={navCms.placeholder}
          style={{
            marginLeft: "auto",
            padding: "5px",
            fontSize: "16px",
            width: "800px",
          }}
          value={searchInput}
          onChange={(e: any) => setSearchInput(e.target.value)}
        />
        <div
          style={{
            height: "60px",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "10px",
            marginTop: "15px",
          }}
        >
          {" "}
          {navCms?.searchLogo}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
