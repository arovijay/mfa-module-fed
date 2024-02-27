# mfa-module-fed
ng new shell-app --routing
ng add @angular-architects/module-federation@16 --project shell-app --port 4200 
<optional> --> --skip-confirmation

ng new remote-app --routing
ng add @angular-architects/module-federation@16 --project remote-app --port 4100 
<optional> --> --skip-confirmation

reference https://www.youtube.com/watch?v=9UJ8Lesx7Ns&list=PL1UWPWOy5Ulce7Xd0vVP1l7qJ51oLYx_l&index=4