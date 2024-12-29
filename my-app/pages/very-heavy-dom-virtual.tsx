import { useRef } from "react";
import { Layout } from "../components/Layout";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function VeryHeavyDOMVirt() {
  const length = 1e5;
  const parentRef = useRef(undefined);

  const rowVirtualizer = useVirtualizer({
    count: length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  return (
    <div ref={parentRef} style={{ height: `500px`, overflow: "auto" }}>
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            className={virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            Row {virtualRow.index}
          </div>
        ))}
      </div>
    </div>
  );
}

VeryHeavyDOMVirt.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
