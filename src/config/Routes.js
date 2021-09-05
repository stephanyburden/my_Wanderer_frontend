import { Switch, Route } from "react-router";
import CityContainer from '../pages/CityContainer.jsx';
import Homepage from '../pages/Homepage.jsx';
import PostShowPage from '../pages/PostShowPage.jsx';
import CityShowPage from '../pages/CityShowPage.jsx'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/cities' component={CityContainer} />
            <Route exact path = '/cities/:cityId/' render={(props) => <CityShowPage {...props} />} />
            <Route exact path = '/cities/:cityId/posts/:postsId' render={(props) => <PostShowPage {...props} />} />
            
        </Switch>
    )

}

export default Routes