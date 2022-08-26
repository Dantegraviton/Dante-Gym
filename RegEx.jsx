export const validEmail = new RegExp(
    // /^[a-zA-Z0-9]\@[a-zA-Z0-9][a-zA-Z]$/
    /^[a-z0-9]{2,}\@(gmail|yahoo|hotmail)\.[\w\.]{2,7}$/i
 );
 export const validPassword = new RegExp(/^[a-z\d\@\.]{8,20}[a-z]$/i);
 