//If you're not using sessions in express you can delete this file.
import "express-session";

//This extension to the SessionData object will help vscode with the types of the session object
//Add whatever key-value pairs you want to the SessionData interface
declare module "express-session" {
    export interface SessionData {
        messages: string[];
    }
}
