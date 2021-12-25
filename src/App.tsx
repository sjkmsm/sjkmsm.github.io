import React from "react";
import "./App.css";
import me from "./assets/me.jpeg";
import image from "./assets/adventcalender.png";
import {
  Avatar,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  Grid,
  Theme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#fff",
      minHeight: "100vh",
    },
  })
);
const theme = createTheme({
  typography: {
    fontFamily: "Sawarabi Mincho",
  },
  palette: {
    background: { default: "#eeeeee" },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md" className={classes.root}>
          <Grid container>
            <Grid item xs={12} marginTop={4} marginBottom={12}>
              <Typography variant="h3" component="div">
                2021年ふりかえり
              </Typography>
            </Grid>
            <Grid item xs={12} marginTop={1} marginBottom={1}>
              <Divider />
            </Grid>
            <Grid container item xs={12} marginTop={1} marginBottom={3}>
              <Grid item xs="auto" marginRight={1}>
                <Avatar alt="ごましおきなこ" src={me} />
              </Grid>
              <Grid item xs>
                <Typography variant="body2" component="div">
                  書いた人:ごましおきなこ
                </Typography>
                <Typography variant="body2" component="div">
                  社会人もうすぐ5年目、転職してもうすぐ2年経ちます。「はじめてのIT勉強会」代表やらせていただいております。
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} marginTop={1} marginBottom={3}>
              <Typography variant="body2" component="p">
                公開日:2021-12-25
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="p">
                この記事は
                <a
                  href="https://adventar.org/calendars/6457"
                  target="_blank"
                  rel="noreferrer"
                >
                  はじめてのIT勉強会アドベントカレンダー'21
                </a>
                の25日目の記事です。
                <br />
                <br />
                遅くなりましたがアドベントカレンダー最終日の記事です。
                <br />
                最終日の記事ではありますが、個人的なブログのような感じです。
                <br />
                <br />
                みなさん今年もアドベントカレンダーのご参加ありがとうございました！！！
                <br />
                <div style={{ textAlign: "center" }}>
                  <img
                    src={image}
                    alt="advent calender"
                    style={{ width: "90%", margin: 16 }}
                  />
                </div>
                <br />
                全日程参加表明いただいて運営としても大変嬉しい限りでした！
                <br />
                きっと来年もあると思いますので、書けた方も書けなかった方もいろんな方に「はじめてのアドベントカレンダー参加」をご経験いただければと思います。
                <br />
              </Typography>
              <Typography
                variant="h4"
                component="p"
                marginTop={4}
                marginBottom={2}
              >
                勉強会のふりかえり
              </Typography>
              <Typography variant="body1" component="p">
                今年はほとんど活動しませんでしたね、、、。
                <br />
                イベントを楽しみにしてくださっていた方々をはじめ、関係者・運営の方にはもうしわけないです。
                <br />
                本来であれば今月は、毎年行っているコミュニティミーティングのイベントがあったのですが、段取り等諸々整わずイベントを見送らせていただきました。
                <br />
                コミュニティ運営や、人との関わりの難しさを感じた一年でした。
              </Typography>
              <Typography
                variant="h4"
                component="p"
                marginTop={4}
                marginBottom={2}
              >
                そのほかのふりかえり
              </Typography>
              <Typography variant="body1" component="p">
                今年は年初めからReactを触っていました。
                <br />
                JavaScript自体ほとんどはじめてでした。1年かけて「なんもわからん」から「チョットワカル・・・」くらいには成長したような気もしますが、わかった気になっているだけで、実は何もわかってないのかもしれません。
                <br />
                <br />
                もうお分かりかもしれないのですが、このページもReactを使って作ってみました。
                <br />
                作業時間としては12/25
                11:00〜18:00くらいです。（そのうち2時間はgitの設定周りで詰まっていました）
                <br />
                <br />
                本当なら、コンテンツ用にデータ定義して、Material
                UIも使っているので、お洒落な感じに作って・・・と思っていたのですが、ただのわたしの考えたさいきょうのブログとして夢の中で消えてしまいました。
                <br />
                そのうちこのページは綺麗に作り直します・・・
                <br />
                なのであまりソースコードは見ないでいただけると嬉しいです。
                <br />
                <br />
                <br />
                1年Reactをやってみて、とても面白いと感じています。
                <br />
                とはいうものの、たいていTypeScriptエラーで悩んだり、JavaScriptの機能を知らないがためによくわからないコードを書いてしまったりと、React以前の難しさを感じています。
                <br />
                Hooksもよく使うものぐらいしか把握できていないし、Reduxなどはよくわかりません。Fluxムズカシイ。
                <br />
                そのうえ、cssも苦手なため、面白いと感じている割にあまり良いコードはかけていないかもしれません。
                <br />
                でも、EslintとPrettierでコード整形ルールはガチガチなのでコーディング中にフォーマットを気にしなくていいのは書きやすくていいなとか、コーディングの結果が目で見れるのはモチベーション高いな・・・と感じます。
                <br />
                いわゆるフロントエンドエンジニア？を1年やってみて、そりゃまあバックエンドとは別方向の難しさは結構あるなと・・・ブラウザ間の挙動の違いとか、UIライブラリーの知識とか、モバイルデザイン対応とか・・・
                <br />
                <br />
                手短ではありますがこんなところで今年の「はじめてのIT勉強会'21アドベントカレンダー」をしめさせていただきたいと思います。
                <br />
                <br />
                来年もどうぞよろしくお願いします。
                <br />
                今年もありがとうございました。
                <br />
                <br />
                <br />
                <br />
                以下この記事のために参考にしたサイトです。
                <br />
                数時間で作成できるのでぜひ試してみてください。
              </Typography>
              <ul>
                <li>
                  <a
                    href="https://ja.reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    React – ユーザインターフェース構築のための JavaScript
                    ライブラリ
                  </a>
                </li>
                <li>
                  <a href="https://mui.com/" target="_blank" rel="noreferrer">
                    MUI: The React component library you always wanted
                  </a>
                </li>
                <li>
                  <a
                    href="https://btj0.com/blog/react/github-pages/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reactの初期ページをGitHub Pagesで公開(デプロイ)する方法
                  </a>
                </li>
              </ul>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Grid>
            <Grid container item xs={12} marginTop={1} marginBottom={1}>
              <Typography
                variant="caption"
                component="div"
                marginLeft="auto"
                marginRight="auto"
              >
                2021 ごましおきなこ
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
