export type Comparison = {
  task: string;
  ember: string;
  react: string;
};

export type ConceptItem = {
  content: string;
  type: "code" | "text";
};

export type Concept = {
  number: number;
  title: string;
  ember: ConceptItem[];
  react: ConceptItem[];
  difference?: string;
};

export const comparisons: Comparison[] = [
  {
    task: "Variable",
    ember: "{{this.name}}",
    react: "{name}",
  },
  {
    task: "Argument / prop",
    ember: "@name",
    react: "name",
  },
  {
    task: "Component prop",
    ember: '<Avatar @name="A" />',
    react: '<Avatar name="A" />',
  },
  {
    task: "Class",
    ember: 'class="box"',
    react: 'className="box"',
  },
  {
    task: "Conditional",
    ember: "{{#if this.ok}}",
    react: "{ok && ...}",
  },
  {
    task: "If / else",
    ember: "{{#if}}...{{else}}",
    react: "{condition ? (...) : (...)}",
  },
  {
    task: "Loop",
    ember: "{{#each this.items as |item|}}",
    react: "{items.map(item => ...)}",
  },
  {
    task: "Event",
    ember: '{{on "click" this.fn}}',
    react: "onClick={fn}",
  },
  {
    task: "State",
    ember: "@tracked count",
    react: "useState()",
  },
  {
    task: "Action",
    ember: "@action",
    react: "function",
  },
  {
    task: "Getter",
    ember: "get total()",
    react: "derived variable",
  },
  {
    task: "Content",
    ember: "{{yield}}",
    react: "{children}",
  },
  {
    task: "DOM behavior",
    ember: "modifier",
    react: "ref + useEffect",
  },
  {
    task: "Service",
    ember: "@service",
    react: "Context / custom hook / etc.",
  },
  {
    task: "Router",
    ember: "built in",
    react: "library",
  },
  {
    task: "Data layer",
    ember: "Ember Data",
    react: "external library",
  },
  {
    task: "Helper",
    ember: "Ember helper",
    react: "JS function",
  },
  {
    task: "Modifier",
    ember: "Ember modifier",
    react: "no direct equivalent",
  },
  {
    task: "Controller",
    ember: "Ember controller",
    react: "no direct equivalent",
  },
  {
    task: "Hooks",
    ember: "—",
    react: "React Hooks",
  },
  {
    task: "JSX",
    ember: "—",
    react: "JSX",
  },
  {
    task: "Template",
    ember: "Glimmer / Handlebars",
    react: "JSX",
  },
];

export const concepts: Concept[] = [
  {
    number: 1,
    title: "Component definition",
    ember: [
      {
        content: "import Component from '@glimmer/component';",
        type: "code",
      },
      {
        content: "export default class Avatar extends Component {}",
        type: "code",
      },
    ],
    react: [
      {
        content: "function Avatar() {}",
        type: "code",
      },
      {
        content: "export default Avatar;",
        type: "code",
      },
    ],
    difference:
      "Ember components commonly use Glimmer component classes, while React components are usually functions.",
  },

  {
    number: 2,
    title: "Props & component invocation",
    ember: [
      {
        content:
          "export default class Avatar extends Component {\n  get name() {\n    return this.args.name;\n  }\n}",
        type: "code",
      },
      {
        content: '<Avatar @name="Atul" @size="large" />',
        type: "code",
      },
    ],
    react: [
      {
        content:
          "function Avatar({ name, size }: { name: string; size: string }) {\n  return <h2>{name}</h2>;\n}",
        type: "code",
      },
      {
        content: '<Avatar name="Atul" size="large" />',
        type: "code",
      },
    ],
    difference:
      "Ember calls component inputs arguments and accesses them through this.args. React calls them props and usually receives them through function parameters.",
  },

  {
    number: 3,
    title: "Local variables & derived values",
    ember: [
      {
        content:
          "get fullName() {\n  return `${this.args.firstName} ${this.args.lastName}`;\n}",
        type: "code",
      },
    ],
    react: [
      {
        content: "const fullName = `${firstName} ${lastName}`;",
        type: "code",
      },
    ],
    difference:
      "React commonly uses normal JavaScript variables for values derived from props or state. Ember commonly uses getters for derived values.",
  },

  {
    number: 4,
    title: "Conditional rendering",
    ember: [
      {
        content: "{{#if this.isLoggedIn}}\n  Welcome\n{{/if}}",
        type: "code",
      },
      {
        content:
          "{{#if this.isAdmin}}\n  Admin\n{{else}}\n  User\n{{/if}}",
        type: "code",
      },
    ],
    react: [
      {
        content: "{isLoggedIn && <p>Welcome</p>}",
        type: "code",
      },
      {
        content:
          "{isAdmin ? <p>Admin</p> : <p>User</p>}",
        type: "code",
      },
    ],
    difference:
      "Ember uses template control-flow helpers, while React uses JavaScript expressions inside JSX.",
  },

  {
    number: 5,
    title: "Loops & lists",
    ember: [
      {
        content:
          "{{#each this.items as |item|}}\n  {{item.name}}\n{{/each}}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "{items.map((item) => (\n  <p key={item.id}>{item.name}</p>\n))}",
        type: "code",
      },
    ],
    difference:
      "Ember provides the each template helper. React commonly uses JavaScript map() to render lists.",
  },

  {
    number: 6,
    title: "Event handling",
    ember: [
      {
        content:
          '<button {{on "click" this.handleClick}}>\n  Click\n</button>',
        type: "code",
      },
      {
        content:
          "handleClick(event) {\n  // use event\n}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "<button onClick={handleClick}>Click</button>",
        type: "code",
      },
      {
        content:
          "function handleClick(event: React.MouseEvent) {\n  // use event\n}",
        type: "code",
      },
    ],
    difference:
      "Ember uses the on modifier for events, while React uses event props such as onClick.",
  },

  {
    number: 7,
    title: "State & reactivity",
    ember: [
      {
        content: "@tracked count = 0;",
        type: "code",
      },
      {
        content: "this.count++;",
        type: "code",
      },
      {
        content:
          "Changes to tracked properties cause dependent template content to update.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "const [count, setCount] = useState(0);",
        type: "code",
      },
      {
        content:
          "setCount(count + 1);",
        type: "code",
      },
      {
        content:
          "Calling the state setter schedules a re-render of the component.",
        type: "text",
      },
    ],
    difference:
      "Ember uses tracked properties for reactivity. React commonly uses state hooks and re-renders components when state changes.",
  },

  {
    number: 8,
    title: "Lifecycle & effects",
    ember: [
      {
        content:
          "constructor() {}\n\nwillDestroy() {\n  // cleanup\n}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "useEffect(() => {\n  // setup\n\n  return () => {\n    // cleanup\n  };\n}, []);",
        type: "code",
      },
    ],
    difference:
      "React commonly handles side effects and cleanup with useEffect. Ember uses lifecycle hooks and other framework primitives.",
  },

  {
    number: 9,
    title: "Forms & controlled inputs",
    ember: [
      {
        content:
          '<Input @value={{this.name}} />',
        type: "code",
      },
      {
        content:
          '<button type="submit">Save</button>',
        type: "code",
      },
    ],
    react: [
      {
        content:
          '<input value={name} onChange={(e) => setName(e.target.value)} />',
        type: "code",
      },
      {
        content:
          '<button type="submit">Save</button>',
        type: "code",
      },
    ],
    difference:
      "React commonly uses controlled inputs by connecting the input value to state and updating it through an event handler.",
  },

  {
    number: 10,
    title: "HTML attributes & class names",
    ember: [
      {
        content:
          '<div class="box">\n  <input disabled={{this.isDisabled}} />\n</div>',
        type: "code",
      },
    ],
    react: [
      {
        content:
          '<div className="box">\n  <input disabled={isDisabled} />\n</div>',
        type: "code",
      },
    ],
    difference:
      "React JSX uses className instead of class and expresses dynamic attributes with JavaScript expressions.",
  },

  {
    number: 11,
    title: "Attribute & template interpolation",
    ember: [
      {
        content:
          '<img src={{this.imageUrl}} alt={{this.name}} />',
        type: "code",
      },
      {
        content:
          "<h2>{{this.name}}</h2>",
        type: "code",
      },
    ],
    react: [
      {
        content:
          '<img src={imageUrl} alt={name} />',
        type: "code",
      },
      {
        content:
          "<h2>{name}</h2>",
        type: "code",
      },
    ],
    difference:
      "Ember uses {{ }} for template interpolation, while React uses { } in JSX.",
  },

  {
    number: 12,
    title: "Comments",
    ember: [
      {
        content:
          "{{! This is an Ember template comment }}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "{/* This is a JSX comment */}",
        type: "code",
      },
    ],
    difference:
      "The comment syntax follows the template language used by each framework.",
  },

  {
    number: 13,
    title: "Children, yield & slots",
    ember: [
      {
        content:
          "<Card>\n  Content\n</Card>",
        type: "code",
      },
      {
        content:
          "{{yield}}",
        type: "code",
      },
      {
        content:
          "<Card>\n  <:header>Title</:header>\n  <:body>Content</:body>\n</Card>",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "<Card>Content</Card>",
        type: "code",
      },
      {
        content:
          "function Card({ children }) {\n  return <div>{children}</div>;\n}",
        type: "code",
      },
      {
        content:
          "<Card\n  header={<h2>Title</h2>}\n  body={<p>Content</p>}\n/>",
        type: "code",
      },
    ],
    difference:
      "Ember uses yield and named blocks for content projection. React uses children and explicit JSX props for similar patterns.",
  },

  {
    number: 14,
    title: "Named arguments vs props",
    ember: [
      {
        content:
          '<Avatar @name="Atul" @size="large" />',
        type: "code",
      },
    ],
    react: [
      {
        content:
          '<Avatar name="Atul" size="large" />',
        type: "code",
      },
    ],
    difference:
      "Ember component arguments are marked with @. React uses regular JSX attributes for props.",
  },

  {
    number: 15,
    title: "Default values & boolean props",
    ember: [
      {
        content:
          '<Button @disabled={{true}} />',
        type: "code",
      },
      {
        content:
          "get name() {\n  return this.args.name ?? 'Guest';\n}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "<Button disabled={true} />",
        type: "code",
      },
      {
        content:
          "<Button disabled />",
        type: "code",
      },
      {
        content:
          "function Avatar({ name = 'Guest' }) {\n  return <h2>{name}</h2>;\n}",
        type: "code",
      },
    ],
    difference:
      "Both support default values and boolean props. React can use JavaScript parameter defaults and boolean shorthand.",
  },

  {
    number: 16,
    title: "Services & Context",
    ember: [
      {
        content:
          "@service auth;",
        type: "code",
      },
      {
        content:
          "this.auth.currentUser",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "const auth = useContext(AuthContext);",
        type: "code",
      },
    ],
    difference:
      "Ember services are long-lived injectable objects. React Context provides values to descendants without manually passing props.",
  },

  {
    number: 17,
    title: "Dependency injection",
    ember: [
      {
        content:
          "@service api;",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "import { api } from './api';",
        type: "code",
      },
      {
        content:
          "const api = useContext(ApiContext);",
        type: "code",
      },
    ],
    difference:
      "Ember has framework-level dependency injection. React commonly uses imports, Context, or external dependency injection libraries.",
  },

  {
    number: 18,
    title: "Routing",
    ember: [
      {
        content:
          "this.router.transitionTo('profile');",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "navigate('/profile');",
        type: "code",
      },
    ],
    difference:
      "Routing is a core Ember concept, while React applications usually use an external routing library.",
  },

  {
    number: 19,
    title: "Route definition & nested routes",
    ember: [
      {
        content:
          "Router.map(function () {\n  this.route('about');\n\n  this.route('admin', function () {\n    this.route('users');\n  });\n});",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "<Route path=\"/about\" element={<About />} />\n\n<Route path=\"admin\" element={<Admin />}>\n  <Route path=\"users\" element={<Users />} />\n</Route>",
        type: "code",
      },
    ],
    difference:
      "Both support route hierarchies. Ember provides routing as part of the framework, while React commonly uses a routing library.",
  },

  {
    number: 20,
    title: "URL parameters",
    ember: [
      {
        content:
          "this.route('user', { path: '/user/:id' });",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "<Route path=\"/user/:id\" element={<User />} />",
        type: "code",
      },
      {
        content:
          "const { id } = useParams();",
        type: "code",
      },
    ],
    difference:
      "Both support dynamic URL parameters, but React typically reads them through the routing library.",
  },

  {
    number: 21,
    title: "Templates & JSX",
    ember: [
      {
        content:
          "<h1>{{this.title}}</h1>",
        type: "code",
      },
      {
        content:
          "Ember uses Handlebars/Glimmer templates.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "return (\n  <div>\n    <h1>{title}</h1>\n  </div>\n);",
        type: "code",
      },
      {
        content:
          "React uses JSX inside JavaScript or TypeScript.",
        type: "text",
      },
    ],
    difference:
      "Ember separates template syntax from JavaScript more clearly, while JSX allows UI markup and JavaScript expressions to be written together.",
  },

  {
    number: 22,
    title: "Helpers vs JavaScript functions",
    ember: [
      {
        content:
          "{{format-date this.date}}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "{formatDate(date)}",
        type: "code",
      },
    ],
    difference:
      "Ember helpers are template-specific reusable functions. React commonly uses normal JavaScript functions directly in JSX.",
  },

  {
    number: 23,
    title: "Modifiers & DOM behavior",
    ember: [
      {
        content:
          '<div {{on "click" this.handleClick}}></div>',
        type: "code",
      },
    ],
    react: [
      {
        content:
          "<div ref={elementRef} />",
        type: "code",
      },
      {
        content:
          "useEffect(() => {\n  element.addEventListener('click', handleClick);\n  return () => element.removeEventListener('click', handleClick);\n}, []);",
        type: "code",
      },
    ],
    difference:
      "Ember modifiers provide a dedicated abstraction for DOM behavior. React commonly combines refs, event props, and effects.",
  },

  {
    number: 24,
    title: "DOM references",
    ember: [
      {
        content:
          "DOM behavior is commonly handled through modifiers.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "const elementRef = useRef<HTMLDivElement>(null);\n\n<div ref={elementRef} />",
        type: "code",
      },
    ],
    difference:
      "React uses refs to access DOM elements directly, while Ember commonly uses modifiers for DOM lifecycle behavior.",
  },

  {
    number: 25,
    title: "Async data fetching",
    ember: [
      {
        content:
          "async model() {\n  return await fetch('/api/users').then((res) => res.json());\n}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "useEffect(() => {\n  fetch('/api/users')\n    .then((res) => res.json())\n    .then(setUsers);\n}, []);",
        type: "code",
      },
    ],
    difference:
      "Ember commonly integrates data loading with routes. React commonly performs fetching through effects or dedicated data-fetching libraries.",
  },

  {
    number: 26,
    title: "Data models & data layer",
    ember: [
      {
        content:
          "export default class User extends Model {\n  @attr('string') name;\n  @attr('string') email;\n}",
        type: "code",
      },
      {
        content:
          "Ember Data provides model and persistence abstractions.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "type User = {\n  name: string;\n  email: string;\n};",
        type: "code",
      },
      {
        content:
          "const response = await fetch('/api/users');\nconst users = await response.json();",
        type: "code",
      },
    ],
    difference:
      "Ember has Ember Data as part of its ecosystem. React does not prescribe a data model or data layer, so applications choose their own approach.",
  },

  {
    number: 27,
    title: "Route model & data loading",
    ember: [
      {
        content:
          "async model() {\n  return this.store.findAll('user');\n}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "const { data } = useQuery({\n  queryKey: ['users'],\n  queryFn: fetchUsers,\n});",
        type: "code",
      },
    ],
    difference:
      "Ember routes can provide a model directly. React commonly uses component logic, routing APIs, or data-fetching libraries.",
  },

  {
    number: 28,
    title: "Actions & callbacks",
    ember: [
      {
        content:
          "@action\nhandleSave() {\n  // save data\n}",
        type: "code",
      },
      {
        content:
          "<Button @onClick={{this.handleSave}} />",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "function handleSave() {\n  // save data\n}",
        type: "code",
      },
      {
        content:
          "<Button onClick={handleSave} />",
        type: "code",
      },
    ],
    difference:
      "Ember uses the action decorator for methods used as actions. React normally passes regular functions as callback props.",
  },

  {
    number: 29,
    title: "Observers & effects",
    ember: [
      {
        content:
          "@tracked value = '';\n\nget normalizedValue() {\n  return this.value.trim();\n}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "useEffect(() => {\n  // react to value changes\n}, [value]);",
        type: "code",
      },
    ],
    difference:
      "React does not use Ember-style observers. Effects can run when specified dependencies change.",
  },

  {
    number: 30,
    title: "Decorators",
    ember: [
      {
        content:
          "@tracked count = 0;\n@service router;\n@action handleClick() {}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "React primarily uses Hooks and normal JavaScript/TypeScript syntax instead of Ember's decorator-based patterns.",
        type: "text",
      },
    ],
    difference:
      "Ember uses decorators such as @tracked, @service, and @action for framework behavior. React generally uses functions and Hooks.",
  },

  {
    number: 31,
    title: "Project structure & component discovery",
    ember: [
      {
        content:
          "app/components/avatar.gjs\napp/routes/users.js\napp/services/api.js",
        type: "code",
      },
      {
        content:
          "Ember has strong conventions for file locations and component discovery.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "src/components/Avatar.tsx\nsrc/pages/Users.tsx\nsrc/services/api.ts",
        type: "code",
      },
      {
        content:
          "React projects generally require explicit imports and allow flexible project structures.",
        type: "text",
      },
    ],
    difference:
      "Ember relies more heavily on conventions and automatic discovery. React generally leaves structure and imports to the developer.",
  },

  {
    number: 32,
    title: "JavaScript inside templates / JSX",
    ember: [
      {
        content:
          "{{this.name}}",
        type: "code",
      },
      {
        content:
          "{{if this.isActive 'Active' 'Inactive'}}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "{name}",
        type: "code",
      },
      {
        content:
          "{isActive ? 'Active' : 'Inactive'}",
        type: "code",
      },
      {
        content:
          "{user.name.toUpperCase()}",
        type: "code",
      },
    ],
    difference:
      "React JSX can directly evaluate JavaScript expressions inside braces. Ember templates use template expressions and helpers.",
  },

  {
    number: 33,
    title: "Reusable logic & Hooks",
    ember: [
      {
        content:
          "Reusable logic can be extracted into services, helpers, modifiers, or utility functions.",
        type: "text",
      },
      {
        content:
          "@service userService;",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "function useUsers() {\n  // reusable logic\n}",
        type: "code",
      },
      {
        content:
          "const users = useUsers();",
        type: "code",
      },
    ],
    difference:
      "React custom Hooks are a major pattern for sharing stateful component logic. Ember distributes similar responsibilities across several dedicated primitives.",
  },

  {
    number: 34,
    title: "React Hooks",
    ember: [
      {
        content:
          "Ember.js doesn't have a React-style Hooks API. Instead, Ember provides alternatives such as tracked properties, services, modifiers, helpers, and component lifecycle patterns.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "useState()",
        type: "code",
      },
      {
        content:
          "useEffect()",
        type: "code",
      },
      {
        content:
          "useContext()",
        type: "code",
      },
      {
        content:
          "useRef()",
        type: "code",
      },
      {
        content:
          "useMemo()",
        type: "code",
      },
      {
        content:
          "useCallback()",
        type: "code",
      },
      {
        content:
          "useReducer()",
        type: "code",
      },
    ],
    difference:
      "React Hooks provide reusable stateful/component logic. Ember uses several dedicated primitives instead of one Hooks system.",
  },

  {
    number: 35,
    title: "Custom Hooks vs Ember services",
    ember: [
      {
        content:
          "@service userService;",
        type: "code",
      },
      {
        content:
          "this.userService.getUsers();",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "function useUsers() {\n  // fetch and manage users\n}",
        type: "code",
      },
    ],
    difference:
      "Ember services are long-lived injectable objects, while React custom Hooks are functions for reusing component logic.",
  },

  {
    number: 36,
    title: "State management",
    ember: [
      {
        content:
          "Ember commonly combines tracked properties, services, and framework conventions for application state.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "const [count, setCount] = useState(0);",
        type: "code",
      },
      {
        content:
          "const value = useContext(AppContext);",
        type: "code",
      },
    ],
    difference:
      "React provides local state and Context primitives, while larger applications may use external state-management libraries.",
  },

  {
    number: 37,
    title: "Global state",
    ember: [
      {
        content:
          "@service session;",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "const session = useContext(SessionContext);",
        type: "code",
      },
    ],
    difference:
      "Ember services are a common application-wide state mechanism. React commonly uses Context or external state libraries.",
  },

  {
    number: 38,
    title: "Arrays & objects in state",
    ember: [
      {
        content:
          "@tracked items = [];\n\nthis.items = [...this.items, item];",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "const [items, setItems] = useState<Item[]>([]);\n\nsetItems([...items, item]);",
        type: "code",
      },
    ],
    difference:
      "Both commonly require replacing the array or object reference so the framework can detect the update.",
  },

  {
    number: 39,
    title: "Data mutation",
    ember: [
      {
        content:
          "const user = this.store.createRecord('user', {\n  name: 'Atul',\n});\n\nawait user.save();",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "const mutation = useMutation({\n  mutationFn: createUser,\n});\n\nmutation.mutate(user);",
        type: "code",
      },
    ],
    difference:
      "Ember Data provides model mutation APIs. React commonly delegates server mutations to fetch, custom Hooks, or data libraries.",
  },

  {
    number: 40,
    title: "Query & cache management",
    ember: [
      {
        content:
          "Ember's data layer and ecosystem can manage application data, while additional libraries may be used for advanced server-state caching.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "useQuery({\n  queryKey: ['users'],\n  queryFn: fetchUsers,\n});",
        type: "code",
      },
    ],
    difference:
      "React applications often use libraries such as TanStack Query for server-state fetching, caching, invalidation, and synchronization.",
  },

  {
    number: 41,
    title: "Error handling",
    ember: [
      {
        content:
          "Ember provides error handling through route/component error states and application-level error handling.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "class ErrorBoundary extends React.Component {\n  componentDidCatch(error) {\n    // handle error\n  }\n}",
        type: "code",
      },
    ],
    difference:
      "React uses Error Boundaries for rendering errors. Ember has framework-level error handling mechanisms.",
  },

  {
    number: 42,
    title: "Loading UI",
    ember: [
      {
        content:
          "Ember routes can use loading substates while route model data is being loaded.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "if (isLoading) {\n  return <p>Loading...</p>;\n}",
        type: "code",
      },
    ],
    difference:
      "Both support loading states, but the mechanism is tied to each framework's data and routing approach.",
  },

  {
    number: 43,
    title: "Suspense",
    ember: [
      {
        content:
          "Ember does not have a direct equivalent to React Suspense. Loading states are usually handled through route or application loading patterns.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "<Suspense fallback={<p>Loading...</p>}>\n  <ProductList />\n</Suspense>",
        type: "code",
      },
    ],
    difference:
      "React Suspense provides a declarative boundary for suspended rendering. Ember uses different loading mechanisms.",
  },

  {
    number: 44,
    title: "Fragments",
    ember: [
      {
        content:
          "Ember templates can render multiple elements without a React-style Fragment syntax.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "<>\n  <h2>Title</h2>\n  <p>Content</p>\n</>",
        type: "code",
      },
    ],
    difference:
      "React Fragments group multiple elements without adding an extra DOM element.",
  },

  {
    number: 45,
    title: "Styling",
    ember: [
      {
        content:
          "CSS can be organized using Ember's project structure and conventional stylesheets.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "import './styles.css';",
        type: "code",
      },
      {
        content:
          '<div className="card">Content</div>',
        type: "code",
      },
    ],
    difference:
      "Both can use regular CSS. React does not prescribe a single styling solution and can also use CSS Modules or other approaches.",
  },

  {
    number: 46,
    title: "Testing",
    ember: [
      {
        content:
          "Ember provides testing conventions and commonly uses QUnit with Ember-specific test helpers.",
        type: "text",
      },
      {
        content:
          "test('renders a user', async function (assert) {\n  await render(<template><User @name=\"Atul\" /></template>);\n  assert.dom('[data-test-user]').hasText('Atul');\n});",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "test('renders user', () => {\n  render(<User />);\n});",
        type: "code",
      },
    ],
    difference:
      "Both ecosystems support component and integration testing, but the testing libraries and conventions differ.",
  },

  {
    number: 47,
    title: "Build system & tooling",
    ember: [
      {
        content:
          "Ember CLI provides a standardized application build and development workflow.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "React itself does not provide a build system. Tools such as Vite, Next.js, or other frameworks can provide it.",
        type: "text",
      },
    ],
    difference:
      "Ember provides more standardized application tooling, while React can be combined with many different build tools.",
  },

  {
    number: 48,
    title: "Framework architecture & dependencies",
    ember: [
      {
        content:
          "Ember is a full framework with strong conventions for routing, data, project structure, and application architecture.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "React focuses primarily on the UI layer and allows developers to choose libraries for routing, data, state, and other concerns.",
        type: "text",
      },
    ],
    difference:
      "Ember provides more built-in architectural decisions, while React provides more flexibility and choice.",
  },

  {
    number: 49,
    title: "Server-side rendering",
    ember: [
      {
        content:
          "Ember supports server-side rendering through Ember FastBoot.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "React supports server rendering through APIs and frameworks such as Next.js.",
        type: "text",
      },
    ],
    difference:
      "Both ecosystems support SSR, but the setup and tooling differ.",
  },

  {
    number: 50,
    title: "Application initialization",
    ember: [
      {
        content:
          "export function initialize(application) {\n  // initialization logic\n}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "createRoot(document.getElementById('root')!).render(\n  <App />\n);",
        type: "code",
      },
    ],
    difference:
      "Ember provides application initialization hooks. React applications generally initialize through the root entry file and provider setup.",
  },

  {
    number: 51,
    title: "Rendering",
    ember: [
      {
        content:
          "Ember renders Glimmer templates and updates dependent content when tracked state changes.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "return <h1>{count}</h1>;",
        type: "code",
      },
      {
        content:
          "React calculates the next UI and reconciles it with the existing rendered tree.",
        type: "text",
      },
    ],
    difference:
      "Both optimize DOM updates, but their rendering and reactivity implementations are different.",
  },

  {
    number: 52,
    title: "Template-only components",
    ember: [
      {
        content:
          "<h2>{{@title}}</h2>",
        type: "code",
      },
      {
        content:
          "A template-only component can contain template markup without a backing JavaScript class.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "function Title({ title }: { title: string }) {\n  return <h2>{title}</h2>;\n}",
        type: "code",
      },
    ],
    difference:
      "React function components naturally combine the component definition and its rendered JSX in one function.",
  },

  {
    number: 53,
    title: "TypeScript",
    ember: [
      {
        content:
          "interface Args {\n  name: string;\n}\n\nexport default class Avatar extends Component<Args> {}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "type AvatarProps = {\n  name: string;\n};\n\nfunction Avatar({ name }: AvatarProps) {\n  return <h2>{name}</h2>;\n}",
        type: "code",
      },
    ],
    difference:
      "Both Ember and React can use TypeScript. The main difference is how types are applied to their component patterns.",
  },

  {
    number: 54,
    title: "Authentication",
    ember: [
      {
        content:
          "Authentication is commonly implemented through services, route guards, and authentication addons.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "const user = useContext(AuthContext);",
        type: "code",
      },
    ],
    difference:
      "Neither framework forces one authentication solution. React applications commonly use Context, Hooks, or external authentication libraries.",
  },

  {
    number: 55,
    title: "Internationalization",
    ember: [
      {
        content:
          "Ember applications commonly use internationalization addons such as ember-intl.",
        type: "text",
      },
    ],
    react: [
      {
        content:
          "const { t } = useTranslation();\n\nreturn <p>{t('welcome')}</p>;",
        type: "code",
      },
    ],
    difference:
      "Both ecosystems generally rely on addons or libraries for internationalization.",
  },

  {
    number: 56,
    title: "Dependency injection vs imports",
    ember: [
      {
        content:
          "@service api;",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "import { api } from './api';",
        type: "code",
      },
    ],
    difference:
      "Ember can inject dependencies through its framework container. React code often imports dependencies directly or receives them through props or Context.",
  },

  {
    number: 57,
    title: "Component lifecycle comparison",
    ember: [
      {
        content:
          "Ember components use lifecycle patterns and modifiers for setup and cleanup behavior.",
        type: "text",
      },
      {
        content:
          "willDestroy() {\n  // cleanup\n}",
        type: "code",
      },
    ],
    react: [
      {
        content:
          "useEffect(() => {\n  // setup\n\n  return () => {\n    // cleanup\n  };\n}, []);",
        type: "code",
      },
    ],
    difference:
      "React commonly handles setup and cleanup with useEffect. Ember uses lifecycle hooks, modifiers, and other framework primitives depending on the requirement.",
  },
];