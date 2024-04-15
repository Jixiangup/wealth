import {FC, useState} from "react";
import * as XLSX from "xlsx";
import Layout from "@theme/Layout";

const ToolsIndex: FC = () => {

  const [data, setData] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* 解析文件 */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, {type: 'binary'});
      /* 获取第一个工作表 */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* 将工作表转换为JSON */
      const data = XLSX.utils.sheet_to_json(ws, {header: 1});
      setData(data);
    };
    reader.readAsArrayBuffer(file);
  }
  return (
    <div>
      <div>
        <input type="file" accept=".xlsx, .xls" onChange={handleFile}/>
        <table>
          <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default () => {
  return (
    <Layout>
      <div>
        <ToolsIndex/>
      </div>
    </Layout>
  );
}