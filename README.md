# mfa-module-fed
ng new shell-app --routing
ng add @angular-architects/module-federation@16 --project shell-app --port 4200 
<optional> --> --skip-confirmation

ng new remote-app --routing
ng add @angular-architects/module-federation@16 --project remote-app --port 4100 
<optional> --> --skip-confirmation