from django import forms
from .models import Produto


class ProdutoForm(forms.ModelForm):
    class Meta:
        model = Produto
        fields = ['Nome', 'Status', 'Destinação', 'Rentabilidade', 'Prazo', 'Administração']