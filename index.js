// const list =
//   React.createElement('div', { class: 'me'},
//     React.createElement('h1', {}, 'An Awesome Person'),
//     React.createElement('p', {}, 'Who is learning React'),
//     React.createElement('ul', { class: 'me_interests'},
//       [
//         React.createElement('li', {}, 'JavaScript'),
//         React.createElement('li', {}, 'React'),
//         React.createElement('li', {}, 'Movies'),
//         React.createElement('li', {}, 'Ice cream')
//       ]
//     ));


const title = React.createElement('h1', {}, 'An Awesome Person')
const description = React.createElement('p', {}, 'Who is learning React')
const interestsStrings = ['JavaScript', 'React', 'Movies', 'Ice cream']
const interestsLIs = interestsStrings.map( string => React.createElement('li', {}, string) )
const interests = React.createElement('ul', { className: 'me__interests' }, interestsLIs)

const meInReact = React.createElement('div', { className: 'me' }, [
   title,
   description,
   interests
 ])
 


ReactDOM.render(meInReact, document.getElementById('main'));
