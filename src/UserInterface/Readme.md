# Fetching from Cloud Firestore Example

```
let db = MyFirebase.firestore()
...
class _ extends Component<> {
 constructor(props: any) {
        super(props)
        let collection = db.collection('user')
        let query = collection.get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log("No Snapshot")
                    return
                }

                snapshot.forEach(doc => {
                    console.log("Hello From Default UI")
                    console.log(doc.id + ": " + doc.data())
                })
            })
            .catch(err => {
                console.log("Error!" + err)
            })
    }
}
```
