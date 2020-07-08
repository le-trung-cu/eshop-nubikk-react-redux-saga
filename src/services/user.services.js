const www = 'https://localhost:5001';


class userServices {
    constructor() {
        this.observers = [];
        this.userData = null;

        window.addEventListener('load', () => {
            this.user = JSON.parse(localStorage.getItem('user'));
        })
    }

    set user(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user));
        this.notify(this.userData);
    }

    get user() {
        return this.userData;
    }

    get authorization() {
        return "Basic " + this.user?.authorization;
    }

    get uid() {
        return this.user?.uid;
    }

    get email() {
        return this.user?.email;
    }

    removeUser() {
        this.userData = null;
        this.notify(null);
    }

    // Add an observer to this.observers.
    onUserChange(observer) {
        this.observers.push(observer);
        return observer;
    }

    // Remove an observer from this.observers.
    removeObserver(observer) {
        const removeIndex = this.observers.findIndex(obs => {
            return observer === obs;
        });

        if (removeIndex !== -1) {
            this.observers = this.observers.slice(removeIndex, 1);
            console.log('remove observer ', observer);
        }
    }

    // Loops over this.observers and calls the update method on each observer.
    // The state object will call this method everytime it is updated.
    notify(data) {
        if (this.observers.length > 0) {
            this.observers.forEach(observer => observer(data));
        }
    }

    createUserWithEmailAndPassword(email, password) {

    }

    signInWithEmailAndPasswors(email, password) {
        // TODO signIn 
        fetch(`${www}/api/account/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Network response was not ok');
            })
            .then(user => {
                console.log(user);
                this.user = user;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error)
            });
    }

    signOut() {
        this.user = null;
        localStorage.clear();
    }
}

export default new userServices();