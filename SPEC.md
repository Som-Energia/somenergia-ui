# Guia de testos unitaris a frontend

##

[**Projectes en els quals ara hi ha testos de front (20/03/2024) 1**](<#projectes-en-els-quals-ara-hi-ha-testos-de-front-(20/03/2024)>)

[**Requisits per poder desenvolupar testos als projectes de frontend 1**](#requisits-per-poder-desenvolupar-testos-als-projectes-de-frontend)

[**Conceptes bàsics a l’hora d’estructurar testos 1**](#conceptes-bàsics-a-l’hora-d’estructurar-testos)

[**Estructura interna dels testos 2**](#estructura-interna-dels-testos)

[**Conceptes bàsics a l’hora de desenvolupar testos 2**](#conceptes-bàsics-a-l’hora-de-desenvolupar-testos)

[Renderitzar el component 2](#renderitzar-el-component)

[Render simple 2](#render-simple)

[Casuístiques que ens podem trobar, amb renders més complexos 2](#casuístiques-que-ens-podem-trobar,-amb-renders-més-complexos)

[Mockejar funcions 4](#mockejar-funcions)

##

# Projectes en els quals ara hi ha testos de front (20/03/2024) {#projectes-en-els-quals-ara-hi-ha-testos-de-front-(20/03/2024)}

- Webforms-ui
- Infoenergia-dashboard

# Requisits per poder desenvolupar testos als projectes de frontend {#requisits-per-poder-desenvolupar-testos-als-projectes-de-frontend}

- @testing-library/user-event
- @testing-library/jest-dom
- @testing-library/react

La llibreria principal per poder fer els testos unitaris és la **@testing-library.** Dins d’aquesta llibreria ens trobem subcarpetes que necessitarem per diverses funcionalitats. Tenim **userEvent** per simular events dels usuaris, com per exemple un click, **jest-dom,** que ens permet afegir matchers que ens poden donar informació sobre elements construits al DOM com per exemple el matcher que ens informa de si l’element existeix “toBeInTheDocument()” i finalment la base per poder fer els testos i que et dona les funionalitats estandars que és la **react**.

# Conceptes bàsics a l’hora d’estructurar testos {#conceptes-bàsics-a-l’hora-d’estructurar-testos}

Els fitxers de testos s’estructuren de la següent manera:

- **imports** de React, components necessaris, elements de les diferents parts de la testing-library, dades mock, etc.
- Entre els imports i l’inici dels testos, es sol tenir un espai on pots **mockejar** llibreries, crides, etc. Per exemple una llibreria que es mockeja sovint és la i18n, que gestiona les traduccions.
- Declaració dels testos:
  - Com a element dominant hi ha una funció que es diu **describe**, que ens permet crear un espai on crear un context ( o scope ), que ens agruparà un seguit de testos. Com a argument a aquesta funció se li passa un text descriptiu i una altra funció que contindrà el grup de testos.
  - Dins del **describe**, trobem els diferents testos que consisteixen en funcions anomenades **it**, on el primer argument és el text del que farà el test i una funció on es desenvolupa el test en sí i el que esperem com a resultat.
  - Extres: Pots definir funcions que fan accions abans de cada test, abans de tots els testos o després de cada test o després de tots els testos. Aquestes funcions són funcions predefinides anomenades **beforeEach, beforeAll, afterEach, afterAll**. Això et permet per exemple muntar un component abans de probar cada test, en cas que necessitis la mateixa configuració per tots, o per exemple netejar accions després de cada test, etc.

# Estructura interna dels testos {#estructura-interna-dels-testos}

Quan creem testos, hem de tenir en compte la següent estructura:

- Preparar les dades d’entrada. El component, les funcions, les dades que volem passar, etc.
- Executar el test, és a dir totes les accions que volem comprobar.
- Validar el resultat d’aquestes. El millor és fer una comprovació o assert per cada test.

# Conceptes bàsics a l’hora de desenvolupar testos {#conceptes-bàsics-a-l’hora-de-desenvolupar-testos}

### Renderitzar el component {#renderitzar-el-component}

#### Render simple {#render-simple}

Dins del test pots renderitzar el component amb la funció render extreta de la llibreria testing-library/react:

**render(\<Component props={} /\>)**

#### Casuístiques que ens podem trobar, amb renders més complexos {#casuístiques-que-ens-podem-trobar,-amb-renders-més-complexos}

A vegades ens podem trobar que hi ha elements (llibreries externes, contextos, dades per props, etc) que ens impedeixen poder fer un render simple. Per fer això podem actuar de diverses maneres:

- **Dades per props:** Sovint els components necessiten rebre dades per les props i després utilitzar-les dins. Hem d’estar segurs al renderitzar que les passem totes sinó ens donarà error.

```javascript
render(<Component identificadors={mockIdentificadors} />)
```

_Exemple codi 1_

En aquest cas tenim un component que necessita identificadors i li passem com a props el valor d’una variable anomenada mockIdentificadors.

- **Llibreries externes que s’han de “mockejar”:** Per exemple sovint ens trobem la llibreria i18n que ens intenta fer les traduccions però al no tenir-la en mock, no ens funciona perquè busca el mateix funcionament que si estigués en dev o prod.

```javascript
jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
    }
  },
}))
```

_Exemple codi 2_

En aquest exemple el que fem és dir que la t, que exportem des del context que utilitza i18n i que serveix per traduïr a través de codis de text (els codis que fem servir als fitxers locale, i que en l’entorn de test no tenim), la seva funcionalitat sigui rebre un codi i retornar-lo. Així podem comprobar que es mostra el codi que realment volem que es mostri.

- **Contextos:** Si tenim un component que forma part dels fills d’un context, i utilitza algunes de les seves funcionalitats (és a dir que s’importa el context des del component) segur que quan fem un test ens fallarà perquè ens demanarà que el posem a l’estructura del render d’aquell component.

```javascript
render(
  <GenerationContextProvider assignmentsJSON={mockAssignmentRows}>
    <GenerationDashboard validationConfirm={mockValidationConfirm} />
  </GenerationContextProvider>,
)
```

_Exemple codi 3_

En aquest exemple, es vol fer un test del component GenerationDashboard, però com que utilitza dades del context GenrationContext, doncs, muntem l’estructura com ho fariem a la App, i si cal (en aquest cas, emplenem per props les dades que necessita el component a dins, que són, els assingmentsJSON) li passem les dades que necessiti.

### Mockejar funcions {#mockejar-funcions}

Algunes vegades volem saber si una funció ha estat cridada, les vegades que ho ha estat o fins i tot amb quines dades s’ha cridat (parametres). Per poder fer aquestes comprovacions, és necessari que la funció a la que volem fer el check, estigui mockejada. Podem fer-ho simplement dient-li o anar una mica més enllà i modificar-la perquè ens torni el que volem.

```javascript
const mockFunc = jest.fn()
```

_Exemple codi 4_

Això ens torna una funció mockejada amb la qual ja podem fer el check del que deiem abans. I ara com la fem servir?

```javascript
<GenerationDashboard action={mockFunc} />
```

_Exemple codi 5_

En aquest exemple tenim el component GenerationDashboard al qual passem una funció com a props (action), que com a valor serà la nostra funció mockejada.

### Accions dels testos

- **Com obtenim un element (html) i validem que existeix.**
- **Com fem accions sobre aquest element.**
- **Com controlem el test quan es modifiquen variables d’estat.**
- **Com controlem que les funcions es criden.**

Tornant a l’exemple d’una funció mockejada (exemple de codi 4), quan fem testos amb aquest component, i volguem cridar a “action”, en realitat estarem cridant a “mockFunc”, i podrem fer els checks que hem comentat abans.

```javascript
expect(mockFunc).toBeCalled()
expect(mockFunc).toBeCalledTimes(1)
expect(mockFunc).toBeCalledWith("actionTest")
```

- **toBeCalled:** comprova que la funció ha estat cridada.
- **toBeCalledTimes**: comprova que la funció s’ha cridat, el nombre de vegades que li passem per paràmetre.
- **toBeCalledWith**: comprova que la funció s’ha cridat amb el que li passem per paràmetre.

## **Canvis d’estat variables i els seus valors `act`, `waitFor`.**

### **`act`**

serveix per assegurar que **tots els updates de React (render \+ efectes)** s’han completat abans de fer les comprovacions.

```javascript
import { act } from "react"

act(() => {
  // acció que provoca un setState
})

//També es poden embolcallar funcions asíncrones
await act(async () => {
  // coses async (fetch, timers…)
})
```

Per tant quan s’ha de fer servir act:

- Quan forces updates manualment`.`
- Quan hi hagi canvis que afectin el render de React (state, props, context,...)

**`waitFor`**  
Reintenta una funció fins que **no llença error** o passa timeout.

```javascript
import { waitFor } from "@testing-library/react"

await waitFor(() => {
  expect(screen.getByText("Loaded")).toBeInTheDocument()
})
```

Fa polling cada 50ms i va executant la funció fins que es compleix:

- Si la funció és correcte passa.
- Si hi ha error, falla.

```javascript
waitFor només funciona si hi ha algún canvi observable al DOM
```

waitFor només funciona si hi ha algún canvi observable al DOM

Quina relació té amb els canvis d’estat?  
El que fa react és:

- Programa update
- Re-renderitza
- Actualitza DOM

Com que no és immediat, el que necessitem és utilitzar act i waitFor.

**Exemple**

```javascript
fireEvent.click(button) // ja està dins act()

await waitFor(() => {
  expect(screen.getByText("1")).toBeInTheDocument()
})
```

## **Variables `normals` vs `d’estat`**

#### **D’estat**

Les variables d’estat és a dir que utilitzen el useState, quan canvien:

- Fan que react faci un re-render
- waitFor pot detectar el canvi
- act és necessari

#### **Normals**

Les variables normals, és a dir que no utilitzen el useState, quan canvien:

- React no re-renderitza
- El DOM no canvia
- waitFor no veurà res diferent

#### **Resum**

- act()
  - garanteix que React ha acabat d’actualitzar
  - necessari per updates de React
- waitFor()
  - espera fins que el DOM reflecteix un canvi
  - util per async
- State
  - provoca re-render \-\> testejable
- Variables normals
  - No re-renderitzen \-\> invisibles per React i tests

##

## **Testing Library `get`, `find` i `query`**

Totes les queries de Testing Library segueixen un patró de nomenclatura consistent: **prefix \+ variant**. El prefix determina el comportament quan l'element no es troba o no es troba immediatament.

![][image1]

##

## **`getBy*`**

**Síncrona**. Retorna l’element si existeix, i llança un error si no el troba. És el comportament que es vol en la majoria de tests: si l’element _hauria d’estar_ al DOM i no hi és, el test ha de fallar immediatament amb un missatge clar.

```javascript
// ✅ Cas normal: l'element existeix
const button = screen.getByRole("button", { name: /submit/i })
expect(button).toBeInTheDocument()

// ✅ Amb getByText
const heading = screen.getByText("Benvingut")

// ✅ Amb getByLabelText — ideal per a formularis
const input = screen.getByLabelText("Correu electrònic")

// ❌ Quan NO existeix: llança TestingLibraryElementError
// Unable to find an element with the role "button"...
const missing = screen.getByRole("button", { name: /delete/i })
```

**Quan usar-lo:** quasi sempre. Si s’espera que l’element sigui present en el moment de la consulta. [^1]

##

## **`queryBy*`**

**Síncrona**. Igual que `getBy`\*, però retorna `null` en lloc de llençar un error si l’element no existeix. Imprescindible quan vols assegurar que alguna cosa _no és_ al DOM.

```javascript
// ✅ Comprovar que un element NO existeix
expect(screen.queryByText("Error de validació")).not.toBeInTheDocument()

// ✅ Comprovar que un missatge d'error no apareix inicialment
expect(screen.queryByRole("alert")).toBeNull()

// ✅ Amb queryByTestId
const modal = screen.queryByTestId("confirmation-modal")
if (modal) {
  // lògica condicional... però millor evita-ho en tests
}

// ⚠️ Error comú: usar queryBy quan esperes que existeixi
// Si existeix, retorna l'element normalment.
// Però si el test falla, el missatge d'error és menys informatiu que getBy.
const btn = screen.queryByRole("button", { name: /submit/i })
expect(btn).toBeInTheDocument() // ← si falla, el missatge és poc clar
```

**Quan usar-lo:** exclusivament per assercions negatives (`not.toBeInTheDocument()`, `toBeNull()`). [^2]

**`findBy*`**

**Retorna una Promesa.** Fa polling internament (fins a 1000 ms) fins que l’element apareix al DOM. Si supera el Time Out, llença un error. Internament és un `waitFor` \+ `getBy`.

```javascript
// ✅ Cas típic: element que apareix després d'una crida a l'API
it("mostra la llista d'usuaris un cop carregada", async () => {
  render(<UserList />)

  // L'spinner és visible primer
  expect(screen.getByRole("status")).toBeInTheDocument()

  // Esperem que aparegui el primer usuari
  const firstUser = await screen.findByText("Anna García")
  expect(firstUser).toBeInTheDocument()

  // Ara podem comprovar la llista completa
  expect(screen.getAllByRole("listitem")).toHaveLength(3)
})

// ✅ Amb timeout personalitzat
const element = await screen.findByRole(
  "heading",
  { name: /resultat/i },
  { timeout: 3000 },
)

// ✅ findAllBy — retorna un array de Promise
const items = await screen.findAllByRole("listitem")
expect(items).toHaveLength(5)
```

**Quan usar-lo:** sempre que l’element aparegui de forma asíncrona. No cal combinar-lo amb `waitFor` – ja ho fa internament.[^3]

###

### **Resum [^4]**

| Situació                                      | Query recomanada |
| :-------------------------------------------- | :--------------- |
| Element present en el render inicial          | `getBy*`         |
| Comprovar que un element **_no existeix_**    | `queryBy*`       |
| Element apareix **_després_** d’una op. async | `findBy*`        |
| Multiples elements presents                   | `getAllBy*`      |

## BeforeAll, BeforeEach, AfterAll, AfterEach

- Definicons dins de BeforeAll, BeforeEach, etc. Què es pot definir en cada part.
-

- Descripció dels testos; Acabar d’explicar la docu de mes amunt.
  - Describe: Context d’un grup de testos, per exemple un camí del form de contractació (contractació \+ alta)
  - It: decripció del que es fa al test i el resultat esperat
