import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

render(<Routes />, document.getElementById('app'));
