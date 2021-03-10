(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(180)),l=t(185),o=t(186),c={id:"client-overview",title:"Client Overview"},p={unversionedId:"client/client-overview",id:"client/client-overview",isDocsHomePage:!1,title:"Client Overview",description:"GraphQL Kotlin provides a set of lightweight type-safe GraphQL HTTP clients. The library provides Ktor HTTP client",source:"@site/docs/client/client-overview.mdx",slug:"/client/client-overview",permalink:"/graphql-kotlin/docs/client/client-overview",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/client/client-overview.mdx",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1615348385,sidebar:"docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions"},next:{title:"Client Features",permalink:"/graphql-kotlin/docs/client/client-features"}},s=[{value:"Project Configuration",id:"project-configuration",children:[{value:"Build Configuration",id:"build-configuration",children:[]},{value:"Generating GraphQL Operations",id:"generating-graphql-operations",children:[]},{value:"Executing Operations",id:"executing-operations",children:[]}]}],u={toc:s};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"GraphQL Kotlin provides a set of lightweight type-safe GraphQL HTTP clients. The library provides ",Object(i.b)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP client"),"\nand ",Object(i.b)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-webclient"},"Spring WebClient"),"\nbased reference implementations as well as allows for custom implementations using other engines, see ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/client/client-customization"},"client customization"),"\ndocumentation for additional details. Type-safe data models are generated at build time by the GraphQL Kotlin ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/gradle-plugin-tasks"},"Gradle"),"\nand ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/maven-plugin-goals"},"Maven")," plugins."),Object(i.b)("p",null,"Client Features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Supports query and mutation operations"),Object(i.b)("li",{parentName:"ul"},"Supports batch operations"),Object(i.b)("li",{parentName:"ul"},"Automatic generation of type-safe Kotlin models supporting ",Object(i.b)("inlineCode",{parentName:"li"},"kotlinx.serialization")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Jackson")," formats"),Object(i.b)("li",{parentName:"ul"},"Custom scalar support - defaults to String but can be configured to deserialize to specific types"),Object(i.b)("li",{parentName:"ul"},"Supports default enum values to gracefully handle new/unknown server values"),Object(i.b)("li",{parentName:"ul"},"Native support for coroutines"),Object(i.b)("li",{parentName:"ul"},"Easily configurable Ktor and Spring WebClient based HTTP Clients"),Object(i.b)("li",{parentName:"ul"},"Documentation generated from the underlying GraphQL schema")),Object(i.b)("h2",{id:"project-configuration"},"Project Configuration"),Object(i.b)("p",null,"GraphQL Kotlin provides both Gradle and Maven plugins to automatically generate your client code at build time. In order\nto auto-generate the client code, plugins require target GraphQL schema and a list of query files to process."),Object(i.b)("p",null,"GraphQL schema can be provided as"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"result of introspection query (default)"),Object(i.b)("li",{parentName:"ul"},"downloaded from an SDL endpoint"),Object(i.b)("li",{parentName:"ul"},"local file")),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://expediagroup.github.io/graphql-kotlin/docs/plugins/gradle-plugin"},"Gradle")," and ",Object(i.b)("a",{parentName:"p",href:"https://expediagroup.github.io/graphql-kotlin/docs/plugins/maven-plugin"},"Maven"),"\nplugin documentation for additional details."),Object(i.b)("p",null,"GraphQL Kotlin plugins generated classes are simple POJOs that implement ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLClientRequest")," and optionally accept variables\n(only if underlying operation uses variables) as a constructor parameter. Generated classes can then be passed directly\nto a GraphQL client to execute either a single or a batch request."),Object(i.b)("p",null,"Example below configures the project to use introspection query to obtain the schema and uses Spring WebClient based HTTP client."),Object(i.b)("h3",{id:"build-configuration"},"Build Configuration"),Object(i.b)(l.a,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"gradle",mdxType:"TabItem"},Object(i.b)("p",null,"Basic ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle.kts")," Gradle configuration that executes introspection query against specified endpoint to obtain target\nschema and then generate the clients under ",Object(i.b)("inlineCode",{parentName:"p"},"com.example.generated")," package name:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'import com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    id("com.expediagroup.graphql") version $latestGraphQLKotlinVersion\n}\n\ndependencies {\n  implementation("com.expediagroup:graphql-kotlin-spring-client:$latestGraphQLKotlinVersion")\n}\n\ngraphql {\n    client {\n        endpoint = "http://localhost:8080/graphql"\n        packageName = "com.example.generated"\n    }\n}\n'))),Object(i.b)(o.a,{value:"maven",mdxType:"TabItem"},Object(i.b)("p",null,"Basic Maven ",Object(i.b)("inlineCode",{parentName:"p"},"pom.xml")," configuration that executes introspection query against specified endpoint to obtain target\nschema and then generate the clients under ",Object(i.b)("inlineCode",{parentName:"p"},"com.example.generated")," package name:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>graphql-kotlin-maven-client-example</artifactId>\n    <version>1.0.0-SNAPSHOT</version>\n\n    <properties>\n        <graphql-kotlin.version>$latestGraphQLKotlinVersion</graphql-kotlin.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <id>generate-graphql-client</id>\n                        <goals>\n                            <goal>introspectSchema</goal>\n                            <goal>generateClient</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <schemaFile>${project.build.directory}/schema.graphql</schemaFile>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')))),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/client"},"graphql-kotlin-client-example")," project for complete\nworking examples of Gradle and Maven based projects."),Object(i.b)("h3",{id:"generating-graphql-operations"},"Generating GraphQL Operations"),Object(i.b)("p",null,"By default, GraphQL Kotlin build plugins will attempt to generate GraphQL operations from all ",Object(i.b)("inlineCode",{parentName:"p"},"*.graphql")," files located under\n",Object(i.b)("inlineCode",{parentName:"p"},"src/main/resources"),". Operations are validated against the target GraphQL schema, which can be manually provided, retrieved by\nthe plugins through introspection (as configured in examples above) or downloaded directly from a custom SDL endpoint.\nSee our documentation for more details on supported ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/gradle-plugin-tasks"},"Gradle tasks"),"\nand ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/maven-plugin-goals"},"Maven Mojos"),"."),Object(i.b)("p",null,"When creating your GraphQL operations make sure to always specify an operation name and name the files accordingly. Each\none of your GraphQL operation files will generate a corresponding Kotlin file with a class matching your operation\nname. Input objects, enums and custom scalars definitions will be shared across different operations. All other objects\nwill be generated operation specific package name. For example, given ",Object(i.b)("inlineCode",{parentName:"p"},"HelloWorldQuery.graphql")," with ",Object(i.b)("inlineCode",{parentName:"p"},"HelloWorldQuery")," as\nthe operation name, GraphQL Kotlin plugins will generate a corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"HelloWorldQuery.kt")," file with a ",Object(i.b)("inlineCode",{parentName:"p"},"HelloWorldQuery"),"\nclass under the configured package."),Object(i.b)("p",null,"For example, given a simple schema"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  helloWorld: String\n}\n")),Object(i.b)("p",null,"And a corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"HelloWorldQuery.graphql")," query"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"query HelloWorldQuery {\n  helloWorld\n}\n")),Object(i.b)("p",null,"Plugins will generate following client code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'package com.example.generated\n\nimport com.expediagroup.graphql.client.types.GraphQLClientRequest\nimport kotlin.String\nimport kotlin.reflect.KClass\n\nconst val HELLO_WORLD_QUERY: String = "query HelloWorldQuery {\\n    helloWorld\\n}"\n\nclass HelloWorldQuery: GraphQLClientRequest<HelloWorldQuery.Result> {\n    override val query: String = HELLO_WORLD_QUERY\n\n    override val operationName: String = "HelloWorldQuery"\n\n    override fun responseType(): KClass<HelloWorldQuery.Result> = HelloWorldQuery.Result::class\n\n    data class Result(\n        val helloWorld: String\n    }\n}\n')),Object(i.b)("p",null,"Generated classes are simple POJOs that implement ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLClientRequest")," interface and represent a GraphQL request."),Object(i.b)("h3",{id:"executing-operations"},"Executing Operations"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"GraphQLWebClient")," uses the Spring WebClient to execute the underlying operations and allows you to customize it by providing\nan instance of ",Object(i.b)("inlineCode",{parentName:"p"},"WebClient.Builder"),". ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLWebClient")," requires target URL to be specified and defaults to use ",Object(i.b)("inlineCode",{parentName:"p"},"Jackson"),"\nbased GraphQL serializer. Please refer to ",Object(i.b)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-client"},"Spring documentation"),"\nfor additional details."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'package com.example.client\n\nimport com.expediagroup.graphql.client.spring.GraphQLWebClient\nimport com.expediagroup.graphql.generated.HelloWorldQuery\nimport kotlinx.coroutines.runBlocking\n\nfun main() {\n    val client = GraphQLWebClient(url = "http://localhost:8080/graphql")\n    runBlocking {\n        val helloWorldQuery = HelloWorldQuery()\n        val result = client.execute(helloWorldQuery)\n        println("hello world query result: ${result.data?.helloWorld}")\n    }\n}\n')))}d.isMDXComponent=!0},180:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,g=u["".concat(l,".").concat(b)]||u[b]||d[b]||i;return t?r.a.createElement(g,o(o({ref:n},p),{},{components:t})):r.a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},181:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},183:function(e,n,t){"use strict";var a=t(0),r=t(184);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},184:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},185:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(183),l=t(181),o=t(53),c=t.n(o),p=37,s=39;n.a=function(e){var n=e.lazy,t=e.block,o=e.defaultValue,u=e.values,d=e.groupId,b=e.className,g=Object(i.a)(),m=g.tabGroupChoices,h=g.setTabGroupChoices,f=Object(a.useState)(o),v=f[0],O=f[1],j=a.Children.toArray(e.children);if(null!=d){var y=m[d];null!=y&&y!==v&&u.some((function(e){return e.value===y}))&&O(y)}var x=function(e){O(e),null!=d&&h(d,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},b)},u.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case p:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e)},onFocus:function(){return x(n)},onClick:function(){x(n)}},t)}))),n?Object(a.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},186:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);