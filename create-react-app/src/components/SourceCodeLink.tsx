import { FunctionComponent } from "react";

export interface SourceCodeLinkProps {
  fileName: string;
  line?: number;
  column?: number;
}

export const SourceCodeLink: FunctionComponent<SourceCodeLinkProps> = ({fileName, line, column, children, ...rest}) => {
  const params = new URLSearchParams();
  params.set('fileName', fileName);
  if (line) {
    params.set('lineNumber', `${line}`);
  }
  if (column) {
    params.set('colNumber', `${column}`);
  }
  const url = `${window.location.origin}/__open-stack-frame-in-editor?${params.toString()}`;
  return (
    <a {...rest} href={url} target='_blank'>
      {children}
    </a>
  );
}
