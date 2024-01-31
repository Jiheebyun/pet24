
import Link from "next/link";
import classes from "./login.module.css";


export default function Login (){
    return (
        <>
            <div className={classes.loginPageWrapper}>
                <div className={classes.loginContainer}>
                    <div className={classes.cancelWrapper}>
                        <Link href={'/'}><img className={classes.cancelBtn} src="/img/cancel_Image.png" alt="cancel"></img></Link>
                    </div>
                    <div className={classes.loginLogoWrapper}>
                        <Link href={"/"}><img className={classes.loginLogoWrapperImg} src="/img/logo.png" alt="login-logo"></img></Link>
                        <span className={classes.loginLogoWrapperSpan}>Login into your account</span>
                    </div>
                    <div className={classes.loginInfoWrapper}>
                        <span className={classes.loginInfoWrapperSpan }>Email </span>
                        <input className={classes.loginInfoWrapperInput} type="text" placeholder="alex@email.com"></input>
                        <span className={classes.loginInfoWrapperSpan}>Password</span>
                        <input className={classes.loginInfoWrapperInput}type="password" placeholder="Enter your password"></input>
                    </div>
                    <span className={classes.forgotpassword}><Link href={''}>Forgot password?</Link></span>
                    <button className={classes.loginBtn}>Login Now</button>
                    <div className={classes.lineWrapper}>
                        <div className={classes.line}>OR</div>
                    </div>

                    <div className={classes.googleLoginWrapper}>
                        <img  className={classes.googleLoginWrapperImg} src="/img/googleLogo.png" alt="google-logo"></img>
                    </div>

                    <div className={classes.lineWrapper}>
                        <div className={classes.line}>OR</div>
                    </div>

                    <Link href={'/signin'}><button className={classes.signinBtn}>Sign in</button></Link>
                    <span className={classes.vetLoginHere}><Link href={''}>Are you a Vet? Login Here</Link></span>
                </div>

                <div className={classes.loginUserImageWrapper}>
                    <div className={classes.userImageContainer}>
                        <img className={classes.userImage} src="/img/userImage.png" alt="user"></img>
                        <span className={classes.userImageContainerSpan}> Our precious member of Pet24 provides this image. </span>
                    </div>
                </div>
            </div>
        </>
    )
}