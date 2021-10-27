import React from 'react';
import { OpportunityPage } from '../layouts/OpportunityPage';

const Page = ({location}) => { return (<OpportunityPage filter={location.state.filter}/>)}
export default Page;
