function PasswordChange(){
    return(
        <div className=" ml-20 mt-10 flex flex-col items-center">
            <h1 className=" font-bold text-2xl ">PassWord Change</h1>
            <form action="/api/newpassword" method="POST" id="pwchange">
                <div className="flex mt-5">
                    <div className=" flex flex-col items-end">
                        <span className=" mb-6">Current PassWord</span>
                        <span className=" mb-6">New PassWord</span>
                        <span className=" mb-5">Confirm New PassWord</span>
                    </div>
                    <div>
                        <input name="Current" type="password" className=" mb-5 ml-6 border border-slate-950"/><br />
                        <input name="NewPw" type="password" className=" mb-5 ml-6 border border-slate-950"/><br />
                        <input name="NewPwCheck" type="password" className=" mb-5 ml-6 border border-slate-950"/><br />
                        
                    </div>
                </div>
            </form>
            <button type="submit" form="pwchange" 
            className=" px-5 text-sm border border-slate-500 mt-5 bg-gray-300">Save Change</button>
        </div>
    )
}
export default PasswordChange;