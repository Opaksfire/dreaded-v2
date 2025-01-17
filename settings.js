/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUIwcE1Na0tKQ28yT01JOXpxbW82Ky91eFdrMnpGNUlLbXlIN0h4QmdWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjZvalhRaHJMTG1iRDdaOHFBbW9vRlF3UGQ0dUlrQXB5dDhhdndUdUMyZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR1JsRldmOU9uNUcrdFFEamp3U1gzaVhseURWdDMwd0hoRzJ4bVdWem5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzai9mYlJVckNzWXJ4Y2djVXQrU0hkbkZFR1Vad2JVd2RWdk5CSFpCZVZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDaDR3K21SRG4yWnFaMEJ6T08yZ2h4ZTZFMzN4WllhZElBd29DZFppRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBlOFdFcEN0MUxwYXN4bnA3aGFsZEpXVzNDN203L1dnRVFIYjNjK3ZJd3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtmVmZsUDgzMTZEdkFaWlJIWERaV0o5a3c1M2paLzZDWkJOR0UwMlFWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFNJNkFJWGluWWZnU1AyYTRST0hWZG8rZ2gzNkUxcE1zOG1mbWxKNmVuZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdqUUlkU2l5QlZ4cFVOWm9TVDlCNldxOXdPSUdCNmlud3c1dWpvbDNkRXl0M01tN3lseG5UUzAwTWVpUkh5aER5WitsdUorL05NSXEzZmJxbTc3YUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiL2VBNDFDdVJESUp0MVZhS1BERmpuTFJHV3FpclNtQkRhNFkra2xXZE8yOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDEzNDMyMzM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhDOTJDNDMxMzQ2QzYzM0QzRjcxNzlGMzNGMkM4MUFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzcxMTI1NzN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTM0MzIzMzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTA0MUJDMjQyNTZFRTRGRjY5OEREOTgzMzBCNTM3MkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNzExMjU5MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWGRFaENqWW9ReW1YRkhEQ1FDS3YwQSIsInBob25lSWQiOiI1MGMzZGY0Yy05ZWFmLTQwZDQtYmVmYy1iYzcwOTcyNDJmZDMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUUvL0RLOWE4Q3dEN25CTjhRWExDUnZlc3M4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkzRFFJeEk1QWJVN202MkVKNTZKQ283cjdDcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCMkhETEpGMyIsIm1lIjp7ImlkIjoiMjM0OTAxMzQzMjMzODo2NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPcGFrcyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUdibDU4QkVOTDNxTHdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTnFSOG1rYzVvQk9ZVjNmNndjR0xLOVRXUnByd0lHYVJjODJYOWJnQ1doTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidHIrNEVXeSs1bnFEbUM1bWcxMzVQTW5ZVXhWNTI4b1drKzE1S1VacVJXTVlNRmViaEdKWkFteW1TVm5rM0ZrWXRNYkZmdVZFWi9xbEpoRGtLZkltRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImRNZ1MybGVBVVJjWmJQQXRNMGJzVnVDekRtMVZpTUQrZ25mREFOVGRLYiswaEhIUDFsUS9nSUx4ZkhTckVmQStGdHk3MHdWVlNneVVGLzFZVlVwQUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAxMzQzMjMzODo2NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUYWtmSnBIT2FBVG1GZDMrc0hCaXl2VTFrYWE4Q0Jta1hQTmwvVzRBbG9UIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3MTEyNTQ0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNJWiJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254114018035';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
