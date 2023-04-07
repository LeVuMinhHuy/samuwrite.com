import { useRef } from "react";
import { Settings } from "../../settings/type";
import { EditorState } from "../type";
import { useEditorCreate } from "./create";
import "./input.css";
import * as s from "./input.module.css";
import { useEditorLayout } from "./layout";
import { useEditorTypography } from "./typography";

interface Props extends EditorState {
  settings: Settings;
}

export enum EditorStoreName {
  Database = "monacoEditorDB",
  Object = "unsavedChanges",
}

export const EditorInput = async (props: Props): Promise<JSX.Element> => {
  const { setEditor, editor, settings } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  //const storedEditorValue = await loadChangesFromIndexedDB();

  useEditorCreate({ containerRef, setEditor });
  useEditorLayout({ containerRef, editor, settings });
  useEditorTypography({ editor, settings });

  return <div className={s.container} ref={containerRef} />;
};
