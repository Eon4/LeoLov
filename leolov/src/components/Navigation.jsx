import style from "../styles/navigation.module.scss";

export const Navigation = () => {
  const navItems = [
    { route: "Hjem" },
    { route: "Advokaterne" },
    { route: "Om LeoLov" },
    { route: "Kontakt" },
  ];

  return (
    <nav className={style.navStyle}>
      <div>
        {navItems.map((item, i) => {
          return <a key={i}>{item.route}</a>;
        })}
      </div>
    </nav>
  );
};