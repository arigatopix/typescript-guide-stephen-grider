import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  constructor() {}

  print(report: string): void {
    // template html
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <p>${report}</p>
      </div>
    `;

    // write file
    fs.writeFileSync('report.html', html);
  }
}
