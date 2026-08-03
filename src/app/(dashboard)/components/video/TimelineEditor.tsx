import { Timeline, TimelineState } from "@xzdarcy/react-timeline-editor";
import { Switch } from "antd";
import { cloneDeep } from "lodash";
import React, { useRef, useState } from "react";
import { CustomRender0, CustomRender1 } from "./timeLine/custom";
// import "./index.css";
import {
  CustomTimelineAction,
  CusTomTimelineRow,
  mockData,
  mockEffect,
  scale,
  scaleWidth,
  startLeft,
} from "./timeLine/mock";
import TimelinePlayer from "./timeLine/player";

const defaultEditorData = cloneDeep(mockData);

const TimelineEditor = ({ timelineState, playV, setPlayV }: any) => {
  const [data, setData] = useState(defaultEditorData);
  // const timelineState = useRef<any>();
  const playerPanel = useRef<HTMLDivElement | null>(null);
  const autoScrollWhenPlay = useRef<boolean>(true);

  return (
    <div className="timeline-editor-engine">
      {/* <div className="player-config">
        <Switch
          checkedChildren="开启运行时自动滚动"
          unCheckedChildren="禁用运行时自动滚动"
          defaultChecked={autoScrollWhenPlay.current}
          onChange={(e) => (autoScrollWhenPlay.current = e)}
          style={{ marginBottom: 20 }}
        />
      </div> */}
      <div
        className="player-panel"
        id="player-ground-1"
        ref={playerPanel}
      ></div>
      <TimelinePlayer
        playV={playV}
        setPlayV={setPlayV}
        timelineState={timelineState}
        autoScrollWhenPlay={autoScrollWhenPlay}
      />
      <Timeline
        scale={scale}
        scaleWidth={scaleWidth}
        startLeft={startLeft}
        autoScroll={true}
        ref={timelineState}
        editorData={data}
        effects={mockEffect}
        onChange={(data) => {
          setData(data as CusTomTimelineRow[]);
        }}
        getActionRender={(action, row) => {
          if (action.effectId === "effect0") {
            return (
              <CustomRender0
                action={action as CustomTimelineAction}
                row={row as CusTomTimelineRow}
              />
            );
          } else if (action.effectId === "effect1") {
            return (
              <CustomRender1
                action={action as CustomTimelineAction}
                row={row as CusTomTimelineRow}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default TimelineEditor;
