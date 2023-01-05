
import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {    
    return (
      <Html lang="en">
        <Head title="Próximamente | Natahome.com" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
