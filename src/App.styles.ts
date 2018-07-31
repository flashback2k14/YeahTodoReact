import { CSSProperties } from "react";

export default class AppStyles {
  public static gridContainer(): CSSProperties {
    return {
      display: "grid",
      gridTemplateColumns: "104px 1fr 1fr 104px",
      gridTemplateRows: "72px 1fr 48px",
      gridGap: "5px",
      minHeight: "100vh"
    };
  }

  public static gridItem(): CSSProperties {
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px"
    };
  }

  public static gridItemStart(): CSSProperties {
    return {
      alignItems: "flex-start",
      paddingTop: 16
    };
  }

  public static gridColSpan2(): CSSProperties {
    return {
      gridColumn: "span 2 / auto"
    };
  }
}
