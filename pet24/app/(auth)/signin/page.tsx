
import Link from "next/link";
import classes from "./signIn.module.css";


export default function SignIn (){
    return (
        <>
        
        <div className={classes.signinWrapper}>
            <div className={classes.loginContainer}>
                <div className={classes.cancelWrapper}>
                        <Link href={"/"}><img className={classes.cancelBtn} src="/img/cancel_Image.png" alt="cancel"></img></Link>
                </div>
                <div className={classes.loginLogoWrapper}>
                    <Link href={"/"}><img className={classes.loginLogoWrapperImg} src="/img/logo.png" alt="login-logo"></img></Link>
                    <span className={classes.loginLogoWrapperSpan}>Welcome to Sing In !</span>
                </div>
                <div className={classes.loginInfoWrapper}>
                    <span className={classes.loginiInfoWrapperSpan}>Email </span>
                    <input className={classes.loginInfoWrapperInput} type="text" placeholder="alex@email.com"></input>
                    <span className={classes.loginiInfoWrapperSpan}>Last Name</span>
                    <input className={classes.loginInfoWrapperInput} type="text" placeholder="Enter your password"></input>
                    <span className={classes.loginiInfoWrapperSpan}>First Name</span>
                    <input className={classes.loginInfoWrapperInput} type="text" placeholder="Enter your password"></input>
                    <span className={classes.loginiInfoWrapperSpan}>Password</span>
                    <input className={classes.loginInfoWrapperInput} type="password" placeholder="Enter your password"></input>
                    <span className={classes.loginiInfoWrapperSpan}>Confirm Password</span>
                    <input className={classes.loginInfoWrapperInput} type="password" placeholder="Enter your password"></input>
                </div>
                <span className={classes.forgotpassword}><Link href={''}>Forgot password?</Link></span>
                <button className={classes.signinBtn}>Sign in Now</button>

                <div className={classes.lineWrapper}>
                    <div className={classes.line}>OR</div>
                </div>

                    <Link href={'/login'}><button className={classes.loginBtn}>Log In</button></Link>
                    <span className={classes.vetLoginHere}><Link href={''}>Are you a Vet? Login Here</Link></span>

            </div>

            <div className={classes.loginUserimageWrapper}>
                <div className={classes.userImageContainer}>
                    <img className={classes.userImage} src="/img/userImage.png" alt="user"></img>
                    <span className={classes.userImageContainerSpan}> Our precious member of Pet24 provides this image. </span>
                </div>
            </div>
        </div>
        
        </>
    )
}