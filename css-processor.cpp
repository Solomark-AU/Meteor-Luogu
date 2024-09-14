#include <cstring>
#include <iostream>

using namespace std;

int main()
{
    cout << "Start!" << endl;
    freopen("page-css.css", "r", stdin);
    freopen("var-css.out", "w", stdout);
    string s = "";
    char c = '0';
    while (c != EOF)
    {
        c = getchar();
        if (c == '\n')
        {
            cout << "\"" << s << "\"," << endl;
            s = "";
        }
        else if (c != EOF)
            s = s + c;
    }
    cout << "\"" << s << "\"" << endl;
    return 0;
}